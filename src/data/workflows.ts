export interface Workflow {
  id: number
  name: string
  teamsInvolved: number[]
  description: string
}

export const WORKFLOWS: Workflow[] = [
  {
    id: 1,
    name: "New Law Firm Client — Full Lifecycle",
    teamsInvolved: [4, 5, 8, 7, 2, 3, 1],
    description: "Full 4-phase lifecycle: acquisition, close & onboard, deliver, grow & report.",
  },
  {
    id: 2,
    name: "Full Law Firm Website Build",
    teamsInvolved: [4, 8, 7, 2, 3],
    description: "Creative brief through go-live, DNS cutover, and rank tracking baseline.",
  },
  {
    id: 3,
    name: "Full SEO Campaign",
    teamsInvolved: [7, 2, 8, 3],
    description: "Technical audit through content execution, link building, and rank monitoring.",
  },
  {
    id: 4,
    name: "Brand Build",
    teamsInvolved: [4, 8, 2, 3],
    description: "Discovery through identity execution, content refresh, and social repositioning.",
  },
  {
    id: 5,
    name: "Paid Campaign Launch",
    teamsInvolved: [4, 2, 3, 1],
    description: "Audience research through paid channel execution and revenue forecasting.",
  },
  {
    id: 6,
    name: "Competitive Intelligence Sprint",
    teamsInvolved: [7, 4, 2, 3],
    description: "SEO gap analysis, brand research, content gaps, and paid competitive targeting.",
  },
  {
    id: 7,
    name: "Weekly Business Loop",
    teamsInvolved: [1, 5, 7, 2, 3, 4],
    description: "Monday brief + Friday brief: cash, sales, pipeline, ranks, content, social, paid.",
  },
  {
    id: 8,
    name: "Monthly Close + Forward Plan",
    teamsInvolved: [1, 5, 7, 2, 4],
    description: "Books close, 90-day forecast, margin review, monthly reporting pack, OKR check.",
  },
  {
    id: 9,
    name: "Quarterly Business Review",
    teamsInvolved: [1, 5, 7, 2, 3, 4],
    description: "Revenue trend, competitive analysis, editorial planning, OKR scoring, Q3 target list.",
  },
  {
    id: 10,
    name: "Client Reporting Pack",
    teamsInvolved: [7, 8, 2, 3, 1, 5],
    description: "Monthly per-client report: ranks, technical health, content, social, paid, finance.",
  },
  {
    id: 11,
    name: "Content Marketing Campaign",
    teamsInvolved: [2, 3, 7, 4, 1],
    description: "Keyword-driven pillar content → email sequence → social amplification → paid boost → lead tracking.",
  },
  {
    id: 12,
    name: "Client Retention at Risk",
    teamsInvolved: [5, 4, 7, 2, 1],
    description: "Risk triage, re-pitch, retention offer, churn vs retention impact modeling.",
  },
  {
    id: 13,
    name: "Social + SEO Synergy Loop",
    teamsInvolved: [7, 3, 2],
    description: "Keyword research informs content, content drives social, social signals reinforce SEO.",
  },
  {
    id: 14,
    name: "LinkedIn Authority Program",
    teamsInvolved: [3, 4, 2, 7],
    description: "90-day attorney authority program: content strategy, long-form articles, video, paid LinkedIn.",
  },
  {
    id: 15,
    name: "New EI Service or Product Launch",
    teamsInvolved: [4, 2, 3, 8, 1],
    description: "Market research through launch campaign execution, reporting, and revenue projection.",
  },
  {
    id: 16,
    name: "Internal EI Hiring Flow",
    teamsInvolved: [6, 5, 1],
    description: "Job post → recruitment ads → interview guide → offer → onboarding → payroll setup.",
  },
  {
    id: 17,
    name: "Technical SEO + Website Quality Audit",
    teamsInvolved: [7, 8, 2],
    description: "Technical SEO + performance + accessibility + code quality + content architecture.",
  },
  {
    id: 18,
    name: "Cross-Team Sprint Planning",
    teamsInvolved: [1, 5, 7, 2, 3, 4, 6, 8],
    description: "Monday OKR priorities set across all teams with Beatrix surfacing key metrics.",
  },
]
