import { type LucideIcon, ArrowUpRight, Code2, FolderGit2, Github, RefreshCw, Star, Trophy, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import { Reveal } from "@/components/ui/reveal";
import { useGitHubStats, useLeetCodeStats } from "@/hooks/use-live-developer-stats";
import { socialProfiles } from "@/data/portfolio";

function Metric({ icon: Icon, value, label }: { icon: LucideIcon; value: number; label: string }) {
  return (
    <div className="rounded-2xl border bg-secondary/35 p-4">
      <Icon className="h-4 w-4 text-primary" />
      <p className="mt-4 font-heading text-3xl font-semibold tracking-tight">{value.toLocaleString()}</p>
      <p className="mt-1 text-xs text-muted-foreground">{label}</p>
    </div>
  );
}

function LoadingPanel() {
  return <div className="mt-8 grid animate-pulse grid-cols-3 gap-3" aria-label="Loading live statistics">{[0, 1, 2].map((item) => <div key={item} className="h-32 rounded-2xl bg-secondary" />)}</div>;
}

function DataError({ onRetry }: { onRetry: () => void }) {
  return (
    <div className="mt-8 rounded-2xl border border-dashed p-6 text-center">
      <p className="text-sm text-muted-foreground">Live data is temporarily unavailable. No numbers are being simulated.</p>
      <Button variant="outline" size="sm" className="mt-4 rounded-xl" onClick={onRetry}><RefreshCw /> Try again</Button>
    </div>
  );
}

const LiveProofSection = () => {
  const github = useGitHubStats();
  const leetcode = useLeetCodeStats();
  const maxLanguage = Math.max(...(github.data?.languages.map((language) => language.count) ?? [1]));

  return (
    <section id="live-stats" className="section-shell border-t">
      <div className="container">
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading eyebrow="03 / Live proof" title="The work behind the words." description="Public GitHub and LeetCode data, fetched when you visit. If a service is unavailable, the portfolio says so instead of inventing numbers." />
            <span className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full border bg-card px-4 py-2 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"><span className="status-dot" /> Live public data</span>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <article className="h-full rounded-3xl border bg-card p-6 sm:p-8" aria-live="polite">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary"><Github className="h-5 w-5" /></span><div><h3 className="font-heading text-xl font-semibold">GitHub activity</h3><a href={socialProfiles.github} target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-primary">@sahilsingh682</a></div></div>
                <Button variant="ghost" size="icon" className="rounded-xl" onClick={() => github.refetch()} aria-label="Refresh GitHub statistics"><RefreshCw className={github.isFetching ? "animate-spin" : ""} /></Button>
              </div>

              {github.isPending ? <LoadingPanel /> : github.isError ? <DataError onRetry={() => github.refetch()} /> : github.data && (
                <>
                  <div className="mt-8 grid grid-cols-3 gap-3">
                    <Metric icon={FolderGit2} value={github.data.repositories} label="Public repos" />
                    <Metric icon={Star} value={github.data.stars} label="Total stars" />
                    <Metric icon={Users} value={github.data.followers} label="Followers" />
                  </div>
                  <div className="mt-8">
                    <div className="flex items-center justify-between"><p className="text-sm font-semibold">Primary repository languages</p><Code2 className="h-4 w-4 text-muted-foreground" /></div>
                    <div className="mt-5 space-y-4">
                      {github.data.languages.map((language) => (
                        <div key={language.name}>
                          <div className="mb-2 flex justify-between text-xs"><span>{language.name}</span><span className="font-mono text-muted-foreground">{language.count} repos</span></div>
                          <div className="h-1.5 overflow-hidden rounded-full bg-secondary"><div className="h-full rounded-full bg-primary transition-all duration-700" style={{ width: `${Math.max(8, (language.count / maxLanguage) * 100)}%` }} /></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </article>
          </Reveal>

          <Reveal delay={100}>
            <article className="h-full rounded-3xl border bg-card p-6 sm:p-8" aria-live="polite">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-xl bg-accent/15 text-accent"><Trophy className="h-5 w-5" /></span><div><h3 className="font-heading text-xl font-semibold">LeetCode progress</h3><a href={socialProfiles.leetcode} target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-primary">@imsahilsingh</a></div></div>
                <Button variant="ghost" size="icon" className="rounded-xl" onClick={() => leetcode.refetch()} aria-label="Refresh LeetCode statistics"><RefreshCw className={leetcode.isFetching ? "animate-spin" : ""} /></Button>
              </div>

              {leetcode.isPending ? <LoadingPanel /> : leetcode.isError ? <DataError onRetry={() => leetcode.refetch()} /> : leetcode.data && (
                <>
                  <div className="mt-8 flex flex-col gap-6 rounded-2xl bg-code p-6 text-code-foreground sm:flex-row sm:items-end sm:justify-between">
                    <div><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-code-foreground/60">Problems solved</p><p className="mt-2 font-heading text-6xl font-semibold tracking-[-0.06em] text-primary">{leetcode.data.total}</p></div>
                    <div className="sm:text-right"><p className="text-xs text-code-foreground/60">Global ranking</p><p className="mt-1 font-mono text-lg">#{leetcode.data.ranking.toLocaleString()}</p></div>
                  </div>
                  <div className="mt-7 space-y-5">
                    {[{ label: "Easy", value: leetcode.data.easy }, { label: "Medium", value: leetcode.data.medium }, { label: "Hard", value: leetcode.data.hard }].map((difficulty) => (
                      <div key={difficulty.label}>
                        <div className="mb-2 flex justify-between text-sm"><span>{difficulty.label}</span><span className="font-mono text-muted-foreground">{difficulty.value}</span></div>
                        <div className="h-2 overflow-hidden rounded-full bg-secondary"><div className="h-full rounded-full bg-accent" style={{ width: `${(difficulty.value / leetcode.data.total) * 100}%` }} /></div>
                      </div>
                    ))}
                  </div>
                  <Button asChild variant="outline" className="mt-8 w-full rounded-xl bg-transparent hover:bg-secondary hover:text-foreground"><a href={socialProfiles.leetcode} target="_blank" rel="noopener noreferrer">View problem-solving profile <ArrowUpRight /></a></Button>
                </>
              )}
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default LiveProofSection;
