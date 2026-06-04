export type WorkStatus = "active" | "review" | "blocked"
export type ProjectStatus = "completed" | "in-progress" | "paused"

export interface WorkItem {
  id: string
  title: string
  teamId: number
  specialist: string
  status: WorkStatus
  client?: string
  description?: string
}

export interface Project {
  id: string
  name: string
  workflowId?: number
  teamsInvolved: number[]
  status: ProjectStatus
  completedDate?: string
  startDate?: string
  description: string
  client?: string
}

export const CURRENT_WORK: WorkItem[] = [
  // Finance
  { id: "w1", title: "May cash flow review", teamId: 1, specialist: "Felix", status: "active", description: "30/60/90-day outlook update for June" },
  { id: "w2", title: "Outstanding invoice follow-ups", teamId: 1, specialist: "Paige", status: "active", description: "3 overdue invoices — tone-matched reminders" },
  { id: "w3", title: "May monthly close prep", teamId: 1, specialist: "Mona", status: "review", description: "QuickBooks reconciliation — awaiting final data" },

  // Content & Campaigns
  { id: "w4", title: "3 SEO blog posts — personal injury law", teamId: 2, specialist: "Barbara", status: "active", client: "Miller Law Group" },
  { id: "w5", title: "Q3 content calendar", teamId: 2, specialist: "Max", status: "active", description: "Topical authority plan for Q3" },
  { id: "w6", title: "Re-engagement email sequence", teamId: 2, specialist: "Juno", status: "review", client: "Coastal Legal Partners" },

  // Social & Growth
  { id: "w7", title: "June social content calendar", teamId: 3, specialist: "Stella", status: "active", description: "Instagram, Facebook, TikTok" },
  { id: "w8", title: "LinkedIn thought leadership series", teamId: 3, specialist: "Linx", status: "active", client: "Hartwell & Associates" },

  // Sales & Brand
  { id: "w9", title: "Brand discovery sprint", teamId: 4, specialist: "Ember", status: "active", client: "Morrison Family Law" },
  { id: "w10", title: "Cold outreach sequence — DUI law firms", teamId: 4, specialist: "Celia", status: "active" },
  { id: "w11", title: "Q2 competitor landscape update", teamId: 4, specialist: "Sophie", status: "review" },

  // Client Success & Ops
  { id: "w12", title: "New client onboarding — Rivera Law", teamId: 5, specialist: "Cassie", status: "active", client: "Rivera Law" },
  { id: "w13", title: "CRM cleanup — stale deal triage", teamId: 5, specialist: "Axel", status: "active" },
  { id: "w14", title: "Weekly Monday brief", teamId: 5, specialist: "Beatrix", status: "blocked", description: "Awaiting finance data" },

  // People & Development
  { id: "w15", title: "SEO Specialist job post", teamId: 6, specialist: "Harper", status: "active" },
  { id: "w16", title: "New hire 30/60/90 plan", teamId: 6, specialist: "Aiden", status: "review" },

  // SEO
  { id: "w17", title: "Technical SEO audit", teamId: 7, specialist: "Tera", status: "active", client: "Thompson & Webb" },
  { id: "w18", title: "Keyword map — bankruptcy law vertical", teamId: 7, specialist: "Kylo", status: "active" },
  { id: "w19", title: "Rank tracking baseline setup", teamId: 7, specialist: "Trace", status: "review", client: "Rivera Law" },
  { id: "w20", title: "AI Search visibility audit", teamId: 7, specialist: "Geo", status: "active", client: "Thompson & Webb" },

  // Website Design & Build
  { id: "w21", title: "Website rebuild — creative brief", teamId: 8, specialist: "Dirk", status: "active", client: "Morrison Family Law" },
  { id: "w22", title: "Design system tokens — ePRESQ v2", teamId: 8, specialist: "Syd", status: "review" },
  { id: "w23", title: "Contact form optimization", teamId: 8, specialist: "Forrest", status: "active", client: "Coastal Legal Partners" },
]

export const RECENT_PROJECTS: Project[] = [
  {
    id: "p1",
    name: "Full SEO Campaign",
    workflowId: 3,
    teamsInvolved: [7, 2, 8, 3],
    status: "completed",
    completedDate: "May 28, 2026",
    description: "Technical audit, keyword map, content architecture, rank tracking baseline, social amplification.",
    client: "Hartwell & Associates",
  },
  {
    id: "p2",
    name: "Brand Build",
    workflowId: 4,
    teamsInvolved: [4, 8, 2, 3],
    status: "in-progress",
    startDate: "May 15, 2026",
    description: "Brand discovery, logo + identity, design system, site structure in progress.",
    client: "Morrison Family Law",
  },
  {
    id: "p3",
    name: "Paid Campaign Launch — Q2 Lead Gen",
    workflowId: 5,
    teamsInvolved: [4, 2, 3, 1],
    status: "in-progress",
    startDate: "May 1, 2026",
    description: "Google + Meta + LinkedIn targeting law firm partners. Mid-campaign optimization underway.",
  },
  {
    id: "p4",
    name: "New Client Lifecycle",
    workflowId: 1,
    teamsInvolved: [4, 5, 8, 7, 2, 3, 1],
    status: "in-progress",
    startDate: "Jun 1, 2026",
    description: "Onboarding complete. Technical audit and website build queued.",
    client: "Rivera Law",
  },
  {
    id: "p5",
    name: "Technical SEO + Quality Audit",
    workflowId: 17,
    teamsInvolved: [7, 8, 2],
    status: "completed",
    completedDate: "May 10, 2026",
    description: "Technical audit, performance review, accessibility pass, content gap analysis.",
    client: "Coastal Legal Partners",
  },
  {
    id: "p6",
    name: "Content Marketing Campaign — AI Search",
    workflowId: 11,
    teamsInvolved: [2, 3, 7, 4, 1],
    status: "completed",
    completedDate: "May 20, 2026",
    description: "Pillar content on AI search for law firms. 3 pieces published, email sequence live.",
  },
]
