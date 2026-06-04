import TeamCard from "./TeamCard"
import { TEAMS } from "@/data/teams"

interface TeamGridProps {
  selectedTeam: number | null
  onSelectTeam: (id: number | null) => void
}

export default function TeamGrid({ selectedTeam, onSelectTeam }: TeamGridProps) {
  return (
    <section>
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-500">Teams</h2>
        {selectedTeam !== null && (
          <button
            onClick={() => onSelectTeam(null)}
            className="text-xs text-slate-400 hover:text-slate-200 transition-colors"
          >
            View all teams ×
          </button>
        )}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
        {TEAMS.map((team) => (
          <TeamCard
            key={team.id}
            teamId={team.id}
            selected={selectedTeam === team.id}
            onClick={() => onSelectTeam(selectedTeam === team.id ? null : team.id)}
          />
        ))}
      </div>
    </section>
  )
}
