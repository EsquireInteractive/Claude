"use client"

import { useState } from "react"
import Header from "@/components/Header"
import TeamGrid from "@/components/TeamGrid"
import CurrentWork from "@/components/CurrentWork"
import RecentProjects from "@/components/RecentProjects"
import Recommendations from "@/components/Recommendations"

export default function Dashboard() {
  const [selectedTeam, setSelectedTeam] = useState<number | null>(null)

  return (
    <div className="min-h-screen">
      <Header />
      <main className="max-w-[1600px] mx-auto px-6 py-6 space-y-6">
        <TeamGrid selectedTeam={selectedTeam} onSelectTeam={setSelectedTeam} />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          <CurrentWork selectedTeam={selectedTeam} />
          <RecentProjects selectedTeam={selectedTeam} />
          <Recommendations />
        </div>
      </main>
    </div>
  )
}
