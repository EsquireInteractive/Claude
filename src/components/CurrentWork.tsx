import { CURRENT_WORK, WorkStatus } from "@/data/activity"
import { TEAMS, TEAM_COLORS } from "@/data/teams"

const STATUS_STYLES: Record<WorkStatus, { dot: string; label: string }> = {
  active: { dot: "bg-emerald-400", label: "active" },
  review: { dot: "bg-amber-400", label: "review" },
  blocked: { dot: "bg-red-400", label: "blocked" },
}

interface CurrentWorkProps {
  selectedTeam: number | null
}

export default function CurrentWork({ selectedTeam: selectedTeamId }: CurrentWorkProps) {
  const items = selectedTeamId
    ? CURRENT_WORK.filter((w) => w.teamId === selectedTeamId)
    : CURRENT_WORK

  // Group by team
  const grouped = TEAMS.map((team) => ({
    team,
    items: items.filter((w) => w.teamId === team.id),
  })).filter((g) => g.items.length > 0)

  return (
    <section className="flex flex-col">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-500">Currently Working On</h2>
        <span className="text-xs text-slate-600">{items.length} tasks</span>
      </div>

      <div className="bg-slate-900/60 border border-slate-800 rounded-xl overflow-hidden flex-1">
        <div className="overflow-y-auto max-h-[580px] divide-y divide-slate-800/60">
          {grouped.map(({ team, items }) => {
            const colors = TEAM_COLORS[team.color]
            return (
              <div key={team.id}>
                <div className={`px-4 py-2 flex items-center gap-2 sticky top-0 bg-slate-900/95 backdrop-blur-sm z-10`}>
                  <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${colors.dot}`} />
                  <span className={`text-[11px] font-semibold uppercase tracking-wider ${colors.text}`}>
                    {team.name}
                  </span>
                </div>
                <div className="divide-y divide-slate-800/40">
                  {items.map((item) => {
                    const status = STATUS_STYLES[item.status]
                    return (
                      <div key={item.id} className="px-4 py-3 hover:bg-slate-800/30 transition-colors">
                        <div className="flex items-start justify-between gap-2">
                          <p className="text-sm text-slate-200 leading-snug">{item.title}</p>
                          <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5 ${status.dot}`} title={status.label} />
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs text-slate-500">{item.specialist}</span>
                          {item.client && (
                            <>
                              <span className="text-slate-700">·</span>
                              <span className="text-xs text-slate-500 italic">{item.client}</span>
                            </>
                          )}
                          {item.description && !item.client && (
                            <>
                              <span className="text-slate-700">·</span>
                              <span className="text-xs text-slate-600 truncate max-w-[160px]">{item.description}</span>
                            </>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
          {grouped.length === 0 && (
            <div className="px-4 py-10 text-center text-slate-600 text-sm">No active work for this team.</div>
          )}
        </div>
      </div>

      <div className="mt-2 flex items-center gap-3 text-[11px] text-slate-600">
        <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> active</span>
        <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-amber-400" /> in review</span>
        <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-red-400" /> blocked</span>
      </div>
    </section>
  )
}
