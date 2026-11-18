import { useQuery } from "@tanstack/react-query";

const GITHUB_USER = "sahilsingh682";
const LEETCODE_USER = "imsahilsingh";

interface GitHubUserResponse {
  public_repos: number;
  followers: number;
}

interface GitHubRepoResponse {
  stargazers_count: number;
  language: string | null;
  fork: boolean;
}

export interface GitHubStats {
  repositories: number;
  stars: number;
  followers: number;
  languages: Array<{ name: string; count: number }>;
  syncedAt: string;
}

export interface LeetCodeStats {
  total: number;
  easy: number;
  medium: number;
  hard: number;
  ranking: number;
  syncedAt: string;
}

async function fetchJson<T>(url: string): Promise<T> {
  const response = await fetch(url, { headers: { Accept: "application/json" } });
  if (!response.ok) throw new Error(`Live data request failed (${response.status})`);
  return response.json() as Promise<T>;
}

async function getGitHubStats(): Promise<GitHubStats> {
  const [profile, repositories] = await Promise.all([
    fetchJson<GitHubUserResponse>(`https://api.github.com/users/${GITHUB_USER}`),
    fetchJson<GitHubRepoResponse[]>(`https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=updated`),
  ]);

  const languageCounts = repositories.reduce<Record<string, number>>((counts, repo) => {
    if (repo.language && !repo.fork) counts[repo.language] = (counts[repo.language] ?? 0) + 1;
    return counts;
  }, {});

  return {
    repositories: profile.public_repos,
    followers: profile.followers,
    stars: repositories.reduce((total, repo) => total + repo.stargazers_count, 0),
    languages: Object.entries(languageCounts)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 5),
    syncedAt: new Date().toISOString(),
  };
}

async function getLeetCodeStats(): Promise<LeetCodeStats> {
  const base = `https://alfa-leetcode-api.onrender.com/${LEETCODE_USER}`;
  const [solved, profile] = await Promise.all([
    fetchJson<{
      solvedProblem: number;
      easySolved: number;
      mediumSolved: number;
      hardSolved: number;
    }>(`${base}/solved`),
    fetchJson<{ ranking: number }>(base),
  ]);

  return {
    total: solved.solvedProblem,
    easy: solved.easySolved,
    medium: solved.mediumSolved,
    hard: solved.hardSolved,
    ranking: profile.ranking,
    syncedAt: new Date().toISOString(),
  };
}

export function useGitHubStats() {
  return useQuery({
    queryKey: ["live-github-stats", GITHUB_USER],
    queryFn: getGitHubStats,
    staleTime: 10 * 60 * 1000,
    gcTime: 30 * 60 * 1000,
    retry: 1,
    refetchOnWindowFocus: false,
  });
}

export function useLeetCodeStats() {
  return useQuery({
    queryKey: ["live-leetcode-stats", LEETCODE_USER],
    queryFn: getLeetCodeStats,
    staleTime: 10 * 60 * 1000,
    gcTime: 30 * 60 * 1000,
    retry: 1,
    refetchOnWindowFocus: false,
  });
}
