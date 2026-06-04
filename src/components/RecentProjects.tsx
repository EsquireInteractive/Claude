import { RECENT_PROJECTS, ProjectStatus } from "@/data/activity"
import { TEAMS, TEAM_COLORS } from "@/data/teams"
import { WORKFLOWS } from "@/data/workflows"

const STATUS_STYLES: Record<ProjectStatus, { bg: string; text: string; label: string }> = {
  completed: { bg: "bg-emerald-500/15", text: "text-emerald-400", label: "Completed" },
  "in-progress": { bg: "bg-blue-500/15", text: "text-blue-400", label: "In Progress" },
  paused: { bg: "bg-slate-500/15", text: "text-slate-400", label: "Paused" },
}

interface RecentProjectsProps {
  selectedTeam: number | null
}

export default function RecentProjects({ selectedTeam }: RecentProjectsProps) {
  const projects = selectedTeam
    ? RECENT_PROJECTS.filter((p) => p.teamsInvolved.includes(selectedTeam))
    : RECENT_PROJECTS

  return (
    <section className="flex flex-col">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-500">Recent Projects</h2>
        <span className="text-xs text-slate-600">{projects.length} projects</span>
      </div>

      <div className="bg-slate-900/60 border border-slate-800 rounded-xl overflow-hidden flex-1">
        <div className="overflow-y-auto max-h-[580px] divide-y divide-slate-800/60">
          {projects.map((project) => {
            const statusStyle = STATUS_STYLES[project.status]
            const workflow = project.workflowId
              ? WORKFLOWS.find((w) => w.id === project.workflowId)
              : null

            return (
              <div key={project.id} className="px-4 py-4 hover:bg-slate-800/30 transition-colors">
                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <p className="text-sm font-medium text-slate-200 leading-snug">{project.name}</p>
                  <span className={`flex-shrink-0 text-[11px] font-medium px-2 py-0.5 rounded-full ${statusStyle.bg} ${statusStyle.text}`}>
                    {statusStyle.label}
                  </span>
                </div>

                {project.client && (
                  <p className="text-xs text-amber-400/80 mb-1.5">{project.client}</p>
                )}

                <p className="text-xs text-slate-500 leading-relaxed mb-2">{project.description}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {project.teamsInvolved.map((tid) => {
                      const team = TEAMS.find((t) => t.id === tid)
                      if (!team) return null
                      const colors = TEAM_COLORS[team.color]
                      return (
                        <span
                          key={tid}
                          title={team.name}
                          className={`w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold ${colors.bg} ${colors.text}`}
                        >
                          {tid}
                        </span>
                      )
                    })}
                  </div>
                  <span className="text-[11px] text-slate-600">
                    {project.completedDate ?? project.startDate}
                  </span>
                </div>

                {workflow && (
                  <p className="text-[10px] text-slate-700 mt-1.5">Workflow: {workflow.name}</p>
                )}
              </div>
            )
          })}
          {projects.length === 0 && (
            <div className="px-4 py-10 text-center text-slate-600 text-sm">No recent projects for this team.</div>
          )}
        </div>
      </div>
    </section>
  )
}
