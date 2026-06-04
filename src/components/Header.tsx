"use client"

export default function Header() {
  const now = new Date()
  const dateStr = now.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <header className="border-b border-slate-800">
      <div className="max-w-[1600px] mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-amber-500/15 border border-amber-500/30">
            <span className="text-amber-400 font-bold text-sm tracking-tight">EI</span>
          </div>
          <div>
            <h1 className="text-base font-semibold text-slate-50 leading-tight">Esquire Interactive</h1>
            <p className="text-xs text-slate-500 leading-tight">Team Dashboard · 8 Teams · 52+ Specialists</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-sm text-slate-300">{dateStr}</p>
          <p className="text-xs text-slate-500">You Practice Law. We Make It Rain.™</p>
        </div>
      </div>
    </header>
  )
}
