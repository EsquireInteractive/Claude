import { TEAMS, TEAM_COLORS } from "@/data/teams"
import { CURRENT_WORK } from "@/data/activity"

interface TeamCardProps {
  teamId: number
  selected: boolean
  onClick: () => void
}

export default function TeamCard({ teamId, selected, onClick }: TeamCardProps) {
  const team = TEAMS.find((t) => t.id === teamId)!
  const colors = TEAM_COLORS[team.color]
  const activeCount = CURRENT_WORK.filter((w) => w.teamId === teamId && w.status === "active").length
  const coreSpecialists = team.specialists.filter((s) => !s.shared)

  return (
    <button
      onClick={onClick}
      className={[
        "w-full text-left p-4 rounded-xl border transition-all duration-150",
        "bg-slate-900/60 hover:bg-slate-900",
        selected
          ? `${colors.border} ring-1 ${colors.ring} bg-slate-900`
          : "border-slate-800 hover:border-slate-700",
      ].join(" ")}
    >
      <div className="flex items-start justify-between gap-2 mb-2">
        <div className="flex items-center gap-2">
          <span className={`w-2 h-2 rounded-full flex-shrink-0 mt-0.5 ${colors.dot}`} />
          <span className={`text-sm font-semibold ${colors.text}`}>{team.name}</span>
        </div>
        {team.requiresPlugin && (
          <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-700/60 text-slate-400 flex-shrink-0">
            plugin
          </span>
        )}
      </div>

      <p className="text-xs text-slate-400 leading-relaxed line-clamp-2 mb-3">{team.description}</p>

      <div className="flex items-center justify-between text-xs text-slate-500">
        <span>{coreSpecialists.length} specialists</span>
        {activeCount > 0 && (
          <span className={`px-1.5 py-0.5 rounded text-[11px] font-medium ${colors.badge}`}>
            {activeCount} active
          </span>
        )}
      </div>
    </button>
  )
}
