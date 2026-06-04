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
  progress?: number
}

export interface Project {
  id: string
  zohoId?: string
  name: string
  workflowId?: number
  teamsInvolved: number[]
  status: ProjectStatus
  completedDate?: string
  startDate?: string
  description: string
  client?: string
  progress?: number
  openTasks?: number
}

export const CURRENT_WORK: WorkItem[] = [
  // SEO (Team 7)
  {
    id: "w1",
    title: "Ahrefs site audit — 4xx errors & broken links",
    teamId: 7,
    specialist: "Arnab",
    status: "active",
    client: "EI Website SEO",
    description: "Full crawl in progress — resolving 4xx errors and broken internal links",
  },
  {
    id: "w2",
    title: "Write brief: /google-ads/ppc-for-lawyers/",
    teamId: 7,
    specialist: "Christian",
    status: "active",
    description: "Content brief for PPC landing page targeting law firm advertisers",
  },
  {
    id: "w3",
    title: "Review brief: /google-ads/ppc-for-lawyers/",
    teamId: 7,
    specialist: "Randi",
    status: "review",
    description: "Editing and QA pass on PPC brief before handoff to content",
  },

  // Website Design & Build (Team 8)
  {
    id: "w4",
    title: "Create contact page on design",
    teamId: 8,
    specialist: "Cesar",
    status: "active",
    client: "Mark Bentley",
    description: "Designing contact page layout and form in Figma",
  },
  {
    id: "w5",
    title: "Create inner pages",
    teamId: 8,
    specialist: "Cesar",
    status: "active",
    client: "Hamrick Palmer",
    description: "Building out practice area and attorney profile pages",
  },
  {
    id: "w6",
    title: "Website design",
    teamId: 8,
    specialist: "Desiree",
    status: "review",
    client: "Mark Bentley",
    description: "Full site design in review — awaiting client feedback",
  },
  {
    id: "w7",
    title: "Update website images",
    teamId: 8,
    specialist: "Hazar",
    status: "review",
    client: "North City Law",
    description: "Image optimization and replacement pass",
  },
  {
    id: "w8",
    title: "Upload Boat Accident practice page",
    teamId: 8,
    specialist: "Hazar",
    status: "review",
    client: "Holleman",
    description: "New practice area page staged — pending final review",
  },
  {
    id: "w9",
    title: "EI Website Update — 12 open tasks",
    teamId: 8,
    specialist: "Kelly",
    status: "active",
    client: "EI Website",
    description: "Ongoing internal website improvements across design and copy",
    progress: 91,
  },

  // Content & Campaigns (Team 2)
  {
    id: "w10",
    title: "Make the Pages",
    teamId: 2,
    specialist: "Desiree",
    status: "review",
    client: "Resolvere",
    description: "Final page production — in review before publish",
  },
  {
    id: "w11",
    title: "EI practice area content",
    teamId: 2,
    specialist: "Desiree",
    status: "active",
    description: "Writing EI internal practice content for new service pages",
  },
  {
    id: "w12",
    title: "Writing Projects — 5 open",
    teamId: 2,
    specialist: "Desiree",
    status: "active",
    description: "Active writing queue across multiple clients",
    progress: 92,
  },

  // Client Success & Ops (Team 5)
  {
    id: "w13",
    title: "RedCave — 79 open tasks",
    teamId: 5,
    specialist: "Kelly",
    status: "active",
    client: "RedCave",
    description: "Large active project — ongoing execution across multiple deliverables",
    progress: 8,
  },
  {
    id: "w14",
    title: "Intranet final task",
    teamId: 5,
    specialist: "Kelly",
    status: "review",
    description: "Final intranet milestone — awaiting sign-off",
    progress: 88,
  },
  {
    id: "w15",
    title: "BKBH — 4 open tasks",
    teamId: 5,
    specialist: "Kelly",
    status: "active",
    client: "BKBH",
    description: "Active client tasks in execution",
    progress: 86,
  },

  // Sales & Brand (Team 4)
  {
    id: "w16",
    title: "Set up Google My Business API",
    teamId: 4,
    specialist: "Brendan",
    status: "active",
    description: "High-priority: integrating GMB API for client reporting pipeline",
  },
  {
    id: "w17",
    title: "North City Law — 3 open tasks",
    teamId: 4,
    specialist: "Kelly",
    status: "active",
    client: "North City Law",
    description: "Ongoing account management tasks",
    progress: 75,
  },
]

export const RECENT_PROJECTS: Project[] = [
  {
    id: "p1",
    zohoId: "PR-387",
    name: "Mark Bentley",
    teamsInvolved: [8, 2, 7],
    status: "in-progress",
    startDate: "Jun 3, 2026",
    description: "Website design and page builds in progress — contact page and inner pages active.",
    client: "Mark Bentley",
    progress: 0,
  },
  {
    id: "p2",
    zohoId: "PR-385",
    name: "South Coast Estate Planning",
    teamsInvolved: [8, 2, 7],
    status: "completed",
    completedDate: "May 22, 2026",
    description: "Full website and content delivery completed on schedule.",
    client: "South Coast Estate Planning",
  },
  {
    id: "p3",
    zohoId: "PR-384",
    name: "Surcee Studios",
    teamsInvolved: [8, 2],
    status: "completed",
    completedDate: "Apr 22, 2026",
    description: "18-task project completed — website build and content production delivered.",
    client: "Surcee Studios",
    openTasks: 0,
  },
  {
    id: "p4",
    zohoId: "PR-382",
    name: "North City Law",
    teamsInvolved: [4, 8, 7],
    status: "in-progress",
    startDate: "Apr 1, 2026",
    description: "Active account — website images updated, 3 remaining tasks in progress.",
    client: "North City Law",
    progress: 75,
  },
  {
    id: "p5",
    zohoId: "PR-380",
    name: "EI Social Media Content Plan",
    teamsInvolved: [3, 2, 4],
    status: "completed",
    completedDate: "Mar 26, 2026",
    description: "Internal social strategy and content calendar completed and deployed.",
  },
  {
    id: "p6",
    zohoId: "PR-378",
    name: "Creative Lawyers",
    teamsInvolved: [2, 7, 8],
    status: "completed",
    completedDate: "Mar 23, 2026",
    description: "31-task engagement completed — content, SEO, and site work all delivered.",
    client: "Creative Lawyers",
    openTasks: 0,
  },
  {
    id: "p7",
    zohoId: "PR-373",
    name: "RedCave",
    teamsInvolved: [5, 8, 2, 7],
    status: "in-progress",
    startDate: "Jan 15, 2026",
    description: "Large ongoing engagement — 79 open tasks across ops, content, and web.",
    client: "RedCave",
    progress: 8,
    openTasks: 79,
  },
  {
    id: "p8",
    zohoId: "PR-367",
    name: "EI Website Update",
    teamsInvolved: [8, 7, 2],
    status: "in-progress",
    startDate: "Nov 1, 2025",
    description: "Internal website modernization — 12 open tasks, near completion.",
    progress: 91,
    openTasks: 12,
  },
  {
    id: "p9",
    zohoId: "PR-359",
    name: "EI Website SEO & Rankings",
    teamsInvolved: [7, 2, 8],
    status: "in-progress",
    startDate: "Oct 15, 2025",
    description: "Ongoing SEO campaign for EI.com — site audit, briefs, and rank tracking active. New tasks added today.",
    progress: 0,
    openTasks: 12,
  },
]
