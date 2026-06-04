export type SpecialistType = "AI" | "SMB" | "shared"

export interface Specialist {
  name: string
  type: SpecialistType
  role: string
  shared?: boolean
}

export type TeamColor =
  | "emerald"
  | "blue"
  | "pink"
  | "amber"
  | "violet"
  | "teal"
  | "orange"
  | "cyan"

export interface Team {
  id: number
  name: string
  slug: string
  color: TeamColor
  description: string
  deployFor: string
  specialists: Specialist[]
  requiresPlugin?: string
}

export const TEAM_COLORS: Record<
  TeamColor,
  { bg: string; text: string; border: string; dot: string; badge: string; ring: string }
> = {
  emerald: {
    bg: "bg-emerald-500/10",
    text: "text-emerald-400",
    border: "border-emerald-500/30",
    dot: "bg-emerald-400",
    badge: "bg-emerald-500/20 text-emerald-300",
    ring: "ring-emerald-500/60",
  },
  blue: {
    bg: "bg-blue-500/10",
    text: "text-blue-400",
    border: "border-blue-500/30",
    dot: "bg-blue-400",
    badge: "bg-blue-500/20 text-blue-300",
    ring: "ring-blue-500/60",
  },
  pink: {
    bg: "bg-pink-500/10",
    text: "text-pink-400",
    border: "border-pink-500/30",
    dot: "bg-pink-400",
    badge: "bg-pink-500/20 text-pink-300",
    ring: "ring-pink-500/60",
  },
  amber: {
    bg: "bg-amber-500/10",
    text: "text-amber-400",
    border: "border-amber-500/30",
    dot: "bg-amber-400",
    badge: "bg-amber-500/20 text-amber-300",
    ring: "ring-amber-500/60",
  },
  violet: {
    bg: "bg-violet-500/10",
    text: "text-violet-400",
    border: "border-violet-500/30",
    dot: "bg-violet-400",
    badge: "bg-violet-500/20 text-violet-300",
    ring: "ring-violet-500/60",
  },
  teal: {
    bg: "bg-teal-500/10",
    text: "text-teal-400",
    border: "border-teal-500/30",
    dot: "bg-teal-400",
    badge: "bg-teal-500/20 text-teal-300",
    ring: "ring-teal-500/60",
  },
  orange: {
    bg: "bg-orange-500/10",
    text: "text-orange-400",
    border: "border-orange-500/30",
    dot: "bg-orange-400",
    badge: "bg-orange-500/20 text-orange-300",
    ring: "ring-orange-500/60",
  },
  cyan: {
    bg: "bg-cyan-500/10",
    text: "text-cyan-400",
    border: "border-cyan-500/30",
    dot: "bg-cyan-400",
    badge: "bg-cyan-500/20 text-cyan-300",
    ring: "ring-cyan-500/60",
  },
}

export const TEAMS: Team[] = [
  {
    id: 1,
    name: "Finance",
    slug: "finance",
    color: "emerald",
    description: "Cash flow, payroll, invoices, forecasting",
    deployFor:
      "Cash flow, payroll, invoices, month-end close, forward forecasting, margins, pricing, tax prep, budgeting, spreadsheets.",
    specialists: [
      { name: "Felix", type: "SMB", role: "Cash flow + forward forecast" },
      { name: "Paige", type: "SMB", role: "Payroll + invoice chase + invoicing" },
      { name: "Mona", type: "SMB", role: "Month-end close" },
      { name: "Priya", type: "SMB", role: "Pricing + margins + analysis" },
      { name: "Tara", type: "SMB", role: "Tax specialist" },
      { name: "Emmi", type: "AI", role: "Excel & spreadsheets" },
    ],
  },
  {
    id: 2,
    name: "Content & Campaigns",
    slug: "content",
    color: "blue",
    description: "Blog posts, SEO content, email campaigns, newsletters",
    deployFor:
      "Blog posts, SEO content, email campaigns, newsletters, podcasts, repurposing, presentations, campaign execution, content strategy.",
    specialists: [
      { name: "Max", type: "AI", role: "Content strategy + planning" },
      { name: "Barbara", type: "AI", role: "All written content" },
      { name: "Leo", type: "AI", role: "Podcast + video scripts" },
      { name: "Juno", type: "AI", role: "Email campaigns + drip sequences" },
      { name: "Camille", type: "SMB", role: "Campaign execution + presentations" },
      { name: "SeBo", type: "shared", role: "SEO", shared: true },
      { name: "Adam", type: "shared", role: "Paid media + digital strategy", shared: true },
    ],
  },
  {
    id: 3,
    name: "Social & Growth",
    slug: "social",
    color: "pink",
    description: "Social posts, platform strategy, organic growth",
    deployFor:
      "Social posts, platform strategy, calendars, captions, hooks, hashtags, organic growth across all platforms.",
    specialists: [
      { name: "Stella", type: "AI", role: "Social media — strategy + platform-native content" },
      { name: "Linx", type: "AI", role: "LinkedIn — B2B content + authority-building" },
      { name: "SeBo", type: "shared", role: "SEO & hashtags", shared: true },
      { name: "Adam", type: "shared", role: "Paid social & reporting", shared: true },
    ],
  },
  {
    id: 4,
    name: "Sales & Brand",
    slug: "sales",
    color: "amber",
    description: "Brand positioning, cold outreach, sales funnels, lead gen",
    deployFor:
      "Brand positioning, messaging, cold outreach, proposals, sales funnels, pitching, lead generation, paid ads, market research, logo and identity.",
    specialists: [
      { name: "Ember", type: "AI", role: "Brand strategy" },
      { name: "Echo", type: "AI", role: "Pitch + offer + sales story" },
      { name: "Celia", type: "AI", role: "Cold outreach + templates + negotiation" },
      { name: "Blaze", type: "AI", role: "Funnel + landing pages + conversion copy" },
      { name: "Sophie", type: "AI", role: "Market research + audience + personas" },
      { name: "Cal", type: "SMB", role: "Sales ops — lead triage + talking points" },
      { name: "SeBo", type: "shared", role: "SEO", shared: true },
      { name: "Adam", type: "shared", role: "Paid media + digital strategy", shared: true },
    ],
  },
  {
    id: 5,
    name: "Client Success & Ops",
    slug: "operations",
    color: "violet",
    description: "Onboarding, CRM, operations, reporting",
    deployFor:
      "Client onboarding, CRM management, customer service, complaints, business operations, productivity, risk, workflow design, business intelligence, weekly/monthly/quarterly reporting.",
    specialists: [
      { name: "Cassie", type: "AI", role: "Client onboarding + 30/60/90-day plans" },
      { name: "Cindy", type: "AI", role: "Customer service + complaint handling" },
      { name: "Axel", type: "AI", role: "CRM strategy + maintenance + cleanup" },
      { name: "Bobby", type: "AI", role: "Business ops + systems + workflows" },
      { name: "Nico", type: "AI", role: "Productivity + time management" },
      { name: "Vinnie", type: "AI", role: "Virtual support + assistant" },
      { name: "DiPeDi", type: "AI", role: "Product + ecommerce strategy" },
      { name: "Rex", type: "SMB", role: "Contract review" },
      { name: "Beatrix", type: "SMB", role: "Business reporting — Monday/Friday/quarterly briefs" },
      { name: "SeBo", type: "shared", role: "SEO", shared: true },
      { name: "Adam", type: "shared", role: "Campaign reporting", shared: true },
    ],
  },
  {
    id: 6,
    name: "People & Development",
    slug: "people",
    color: "teal",
    description: "Hiring, HR, onboarding, coaching, skill building",
    deployFor:
      "Hiring, HR packets, onboarding, personal development, coaching, course creation, career growth, innovation, skill building.",
    specialists: [
      { name: "Aiden", type: "AI", role: "Personal development + innovation" },
      { name: "Aria", type: "AI", role: "Course creation" },
      { name: "Inti", type: "AI", role: "Career coaching + CV/resume writing" },
      { name: "Milo", type: "AI", role: "Creative writing + book development" },
      { name: "Harper", type: "SMB", role: "Job post builder" },
      { name: "Ollie", type: "SMB", role: "Plugin onboarding" },
      { name: "SeBo", type: "shared", role: "Job post SEO", shared: true },
      { name: "Adam", type: "shared", role: "Recruitment ads", shared: true },
    ],
  },
  {
    id: 7,
    name: "SEO",
    slug: "seo",
    color: "orange",
    description: "Technical audits, keyword research, backlinks, rank tracking",
    deployFor:
      "Technical audits, keyword research, on-page and off-page optimization, backlinks, competitive analysis, content gaps, rank tracking, traffic diagnosis, programmatic SEO, AI/AEO/GEO search.",
    requiresPlugin: "rampstack-skills",
    specialists: [
      { name: "Tera", type: "AI", role: "Technical SEO + health + audit orchestration" },
      { name: "Kylo", type: "AI", role: "Keyword research + on-page SEO" },
      { name: "Odin", type: "AI", role: "Off-page SEO + backlink audit" },
      { name: "Riku", type: "AI", role: "Competitive SEO + gap analysis" },
      { name: "Trace", type: "AI", role: "Rank tracking + traffic diagnosis" },
      { name: "Geo", type: "AI", role: "AI Search — AI Overviews, LLM citations, AEO/GEO" },
      { name: "Pierre", type: "AI", role: "Content architecture + audit + programmatic" },
      { name: "SeBo", type: "shared", role: "SEO generalist", shared: true },
    ],
  },
  {
    id: 8,
    name: "Website Design & Build",
    slug: "website",
    color: "cyan",
    description: "Brand identity, design systems, frontend, performance, launches",
    deployFor:
      "Brand identity, logo design, creative direction, design systems, information architecture, frontend components, performance, accessibility, security, site launches.",
    requiresPlugin: "rampstack-skills",
    specialists: [
      { name: "Dirk", type: "AI", role: "Creative direction + briefs + art direction" },
      { name: "Iden", type: "AI", role: "Full brand identity — logo, color, type, voice" },
      { name: "Syd", type: "AI", role: "Design system + standards" },
      { name: "Indy", type: "AI", role: "Information architecture + sitemap" },
      { name: "Pixel", type: "AI", role: "Frontend dev + code review" },
      { name: "Percy", type: "AI", role: "Site quality — Core Web Vitals + accessibility + security" },
      { name: "Luca", type: "AI", role: "Launch ops — go-live checklist + DNS" },
      { name: "Mingo", type: "AI", role: "Content migration + media asset pipeline" },
      { name: "Forrest", type: "AI", role: "Forms + conversational design + chatbot flows" },
      { name: "Blaze", type: "shared", role: "Funnel + landing pages", shared: true },
      { name: "Ember", type: "shared", role: "Brand strategy entry point", shared: true },
      { name: "SeBo", type: "shared", role: "SEO during build", shared: true },
    ],
  },
]
