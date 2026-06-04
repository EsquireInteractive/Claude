import { CURRENT_WORK, RECENT_PROJECTS } from "@/data/activity"

export type RecommendationPriority = "urgent" | "high" | "medium"
export type RecommendationTrigger = "time-based" | "dependency" | "opportunity" | "business-context"

export interface Recommendation {
  id: string
  title: string
  workflowId?: number
  priority: RecommendationPriority
  reason: string
  teamsInvolved: number[]
  estimatedImpact: string
  trigger: RecommendationTrigger
}

export function generateRecommendations(): Recommendation[] {
  const today = new Date()
  const dayOfWeek = today.getDay()
  const dayOfMonth = today.getDate()
  const month = today.getMonth()

  const recs: Recommendation[] = []

  // Monthly close: first 7 days of any month means prior month needs closing
  if (dayOfMonth <= 7) {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const priorMonth = monthNames[month === 0 ? 11 : month - 1]
    recs.push({
      id: "rec-monthly-close",
      title: `${priorMonth} Monthly Close + Forward Plan`,
      workflowId: 8,
      priority: "urgent",
      reason: `It's ${monthNames[month]} ${dayOfMonth} — ${priorMonth} books need to be closed. Mona runs the QuickBooks reconciliation, Felix updates the 90-day forecast, Beatrix produces the monthly reporting pack for all clients.`,
      teamsInvolved: [1, 5, 7, 2, 4],
      estimatedImpact: "Gives a clean financial picture for the current month. Ensures accurate billing, P&L narrative, and revenue reporting.",
      trigger: "time-based",
    })
  }

  // Weekly loop: if it's Tuesday–Friday, the Monday loop is overdue
  if (dayOfWeek >= 2 && dayOfWeek <= 5) {
    const daysLate = dayOfWeek - 1
    const dayLabel = ["Mon", "Tue", "Wed", "Thu", "Fri"][dayOfWeek - 1]
    recs.push({
      id: "rec-weekly-loop",
      title: "Weekly Business Loop",
      workflowId: 7,
      priority: "urgent",
      reason: `It's ${dayLabel} — the weekly loop should have kicked off Monday (${daysLate} day${daysLate > 1 ? "s" : ""} ago). Beatrix pulls the Monday brief, Felix reviews cash position, Trace checks rank shifts, Axel reviews CRM pipeline, Cal identifies who to call this week.`,
      teamsInvolved: [1, 5, 7, 2, 3, 4],
      estimatedImpact: "Full-team alignment before the week runs away. Surfaces financial or client risks while there's still time to act.",
      trigger: "time-based",
    })
  }

  // QBR prep: Q2 ends June 30 — if we're in June, start prep
  if (month === 5) {
    const daysLeft = 30 - dayOfMonth
    recs.push({
      id: "rec-qbr",
      title: "Q2 Quarterly Business Review Prep",
      workflowId: 9,
      priority: "high",
      reason: `Q2 ends June 30 — ${daysLeft} days away. Start prep now: Beatrix runs the full quarterly review, Mona produces the Q2 P&L packet, Felix models Q3 forecast, Riku runs competitive analysis, Bobby scores OKRs and sets Q3 goals.`,
      teamsInvolved: [1, 5, 7, 2, 3, 4],
      estimatedImpact: "Clear Q2 performance picture ready before month-end. Sets Q3 strategy, OKRs, and target account list.",
      trigger: "time-based",
    })
  }

  // Quarterly close: if it's within first 10 days of Jan, Apr, Jul, Oct
  if ([0, 3, 6, 9].includes(month) && dayOfMonth <= 10) {
    recs.push({
      id: "rec-qbr",
      title: "Quarterly Business Review",
      workflowId: 9,
      priority: "urgent",
      reason: "New quarter just started. Run the full QBR: Beatrix on revenue trend, Mona on P&L close, Felix on forecast, Riku on competitive landscape, Bobby on OKR scoring.",
      teamsInvolved: [1, 5, 7, 2, 3, 4],
      estimatedImpact: "Closes prior quarter cleanly and sets strategy, OKRs, and target accounts for the new quarter.",
      trigger: "time-based",
    })
  }

  // Dependency: Rivera Law just onboarded — sprint planning is needed
  const riveraProject = RECENT_PROJECTS.find((p) => p.client === "Rivera Law" && p.status === "in-progress")
  if (riveraProject) {
    recs.push({
      id: "rec-sprint-rivera",
      title: "Cross-Team Sprint Planning — Rivera Law",
      workflowId: 18,
      priority: "high",
      reason: "Rivera Law onboarded June 1. Audit and website build are queued but no sprint plan is in place. Bobby should set OKR priorities across SEO, web, and content teams so sequencing is locked.",
      teamsInvolved: [5, 1, 7, 8, 2],
      estimatedImpact: "Keeps Rivera Law delivery on schedule. Prevents bottlenecks between audit → build → content handoffs.",
      trigger: "dependency",
    })
  }

  // Dependency: Morrison brand build in progress → LinkedIn authority program
  const morrisonBrand = RECENT_PROJECTS.find((p) => p.client === "Morrison Family Law" && p.status === "in-progress")
  if (morrisonBrand) {
    recs.push({
      id: "rec-linkedin-morrison",
      title: "LinkedIn Authority Program — Morrison Family Law",
      workflowId: 14,
      priority: "high",
      reason: "Morrison's brand identity is actively being built. Now is the ideal window to launch a 90-day LinkedIn authority program — Linx builds the strategy while Iden's identity work is fresh, Sophie profiles the ideal referral audience.",
      teamsInvolved: [3, 4, 2, 7],
      estimatedImpact: "Attorney thought-leadership pipeline starts immediately. LinkedIn is EI's primary B2B channel for law firm lead gen.",
      trigger: "dependency",
    })
  }

  // Opportunity: competitive intel not run recently
  const recentCompetitive = RECENT_PROJECTS.find((p) => p.workflowId === 6 && p.status !== "in-progress")
  if (!recentCompetitive) {
    recs.push({
      id: "rec-competitive",
      title: "Competitive Intelligence Sprint",
      workflowId: 6,
      priority: "medium",
      reason: "No competitive analysis has run this quarter. Riku leads SERP overlap analysis, Sophie adds brand positioning research, Pierre maps content gaps — strong input for Q3 editorial planning.",
      teamsInvolved: [7, 4, 2, 3],
      estimatedImpact: "Reveals the keyword and content gaps competitors are exploiting right now. Directly feeds the Q3 editorial calendar.",
      trigger: "opportunity",
    })
  }

  // Business context: AI search is a hot topic, Geo is auditing one client
  const geoWork = CURRENT_WORK.find((w) => w.specialist === "Geo")
  if (geoWork) {
    recs.push({
      id: "rec-ai-search",
      title: "AI Search Visibility Audit — All Active Clients",
      workflowId: undefined,
      priority: "medium",
      reason: `Geo is currently auditing ${geoWork.client ?? "a client"} for AI Overviews and LLM citations. Expand this to the full active client roster before Q3 — AI search is reshaping how legal clients find attorneys and early optimization is a differentiator.`,
      teamsInvolved: [7, 2],
      estimatedImpact: "Identifies which clients appear (and which don't) in AI Overviews. Early mover advantage before competitors catch on.",
      trigger: "business-context",
    })
  }

  // Opportunity: Social + SEO synergy loop if both teams have active work
  const hasActiveSEO = CURRENT_WORK.some((w) => w.teamId === 7 && w.status === "active")
  const hasActiveContent = CURRENT_WORK.some((w) => w.teamId === 2 && w.status === "active")
  if (hasActiveSEO && hasActiveContent) {
    recs.push({
      id: "rec-seo-social-synergy",
      title: "Social + SEO Synergy Loop",
      workflowId: 13,
      priority: "medium",
      reason: "SEO and Content teams both have active work right now. Running the synergy loop — Kylo → Pierre → Barbara → Stella → Linx → Adam — will amplify both efforts instead of letting them run in parallel without coordination.",
      teamsInvolved: [7, 3, 2],
      estimatedImpact: "Social amplification of SEO-optimized content reinforces ranking signals. One coordinated push beats two separate efforts.",
      trigger: "opportunity",
    })
  }

  const order: Record<RecommendationPriority, number> = { urgent: 0, high: 1, medium: 2 }
  return recs.sort((a, b) => order[a.priority] - order[b.priority])
}
