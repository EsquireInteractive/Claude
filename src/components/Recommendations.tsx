"use client"

import { generateRecommendations, RecommendationPriority, RecommendationTrigger } from "@/lib/recommendations"
import { TEAMS, TEAM_COLORS } from "@/data/teams"
import { WORKFLOWS } from "@/data/workflows"

const PRIORITY_STYLES: Record<RecommendationPriority, { bg: string; text: string; label: string }> = {
  urgent: { bg: "bg-red-500/15", text: "text-red-400", label: "Urgent" },
  high: { bg: "bg-amber-500/15", text: "text-amber-400", label: "High" },
  medium: { bg: "bg-blue-500/15", text: "text-blue-400", label: "Medium" },
}

const TRIGGER_LABELS: Record<RecommendationTrigger, string> = {
  "time-based": "Time-based",
  dependency: "Dependency",
  opportunity: "Opportunity",
  "business-context": "Business Context",
}

export default function Recommendations() {
  const recs = generateRecommendations()

  return (
    <section className="flex flex-col">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-500">Recommended to Begin</h2>
        <span className="text-xs text-slate-600">{recs.length} suggestions</span>
      </div>

      <div className="bg-slate-900/60 border border-slate-800 rounded-xl overflow-hidden flex-1">
        <div className="overflow-y-auto max-h-[580px] divide-y divide-slate-800/60">
          {recs.map((rec) => {
            const priority = PRIORITY_STYLES[rec.priority]
            const workflow = rec.workflowId ? WORKFLOWS.find((w) => w.id === rec.workflowId) : null

            return (
              <div key={rec.id} className="px-4 py-4 hover:bg-slate-800/30 transition-colors">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <p className="text-sm font-medium text-slate-200 leading-snug">{rec.title}</p>
                  <span className={`flex-shrink-0 text-[11px] font-semibold px-2 py-0.5 rounded-full ${priority.bg} ${priority.text}`}>
                    {priority.label}
                  </span>
                </div>

                <span className="inline-block text-[10px] text-slate-500 border border-slate-700/60 rounded px-1.5 py-0.5 mb-2">
                  {TRIGGER_LABELS[rec.trigger]}
                </span>

                <p className="text-xs text-slate-400 leading-relaxed mb-2">{rec.reason}</p>

                <div className="rounded-lg bg-slate-800/50 px-3 py-2 mb-3">
                  <p className="text-[11px] text-slate-500 font-medium mb-0.5">Impact</p>
                  <p className="text-xs text-slate-400 leading-relaxed">{rec.estimatedImpact}</p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {rec.teamsInvolved.map((tid) => {
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
                  {workflow && (
                    <p className="text-[10px] text-slate-700">Workflow {workflow.id}</p>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
