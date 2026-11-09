import { useId } from "react";
import type { FamilyId } from "@/lib/catalog";

export function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d={diagonal ? "M5 19 19 5M5 5h14v14" : "M4 12h16m-6-6 6 6-6 6"} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
export function Plus({ minus = false }: { minus?: boolean }) {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d={minus ? "M5 12h14" : "M5 12h14M12 5v14"} stroke="currentColor" strokeWidth="1.5" /></svg>;
}
export function Spark({ className = "" }: { className?: string }) {
  return <svg className={className} width="32" height="32" viewBox="0 0 40 40" fill="none" aria-hidden="true"><path d="M20 0c2 12 8 18 20 20-12 2-18 8-20 20C18 28 12 22 0 20 12 18 18 12 20 0Z" fill="currentColor" /></svg>;
}

function LightBars({ count = 6, gold = false }: { count?: number; gold?: boolean }) {
  return <g>
    <path d="M97 158 286 73l5 6-188 86Z" fill="#434846" />
    <path d="M256 236 445 151l5 6-188 86Z" fill="#434846" />
    {Array.from({ length: count }, (_, i) => {
      const x = 92 + i * (190 / (count - 1)); const y = 162 - i * (87 / (count - 1));
      return <g key={i}>
        <path d={`M${x} ${y}l166 80 15-7-166-80Z`} fill={gold ? "#dea32a" : "#c7cac5"} />
        <path d={`M${x} ${y}v8l166 80v-8Z`} fill="#373d39" />
        <path d={`M${x + 166} ${y + 80}l15-7v8l-15 7Z`} fill="#72766d" />
        <path d={`M${x + 8} ${y + 6}l152 73`} stroke="#fdb927" strokeWidth="2.5" strokeDasharray="3 3" />
        <path d={`M${x + 11} ${y - 3}l150 72`} stroke={gold ? "#fbd676" : "#eff0e9"} strokeWidth="1" />
      </g>;
    })}
    <path d="m213 111 51 24 27-12-51-25Z" fill="#716f65" /><path d="m213 111 51 24v22l-51-24Z" fill="#262e29" /><path d="m264 135 27-12v22l-27 12Z" fill="#4e5650" />
    <path d="m219 117 37 18v9l-37-18Z" fill="#fdb927" />
  </g>;
}

export function ProductArt({ family, variant = 1 }: { family: FamilyId; variant?: number }) {
  const gradient = useId().replace(/:/g, "");
  return <svg viewBox="0 0 520 330" className="product-art" role="img" aria-label={`${family.replaceAll("-", " ")} conceptual product placeholder; final product image to follow`}>
    <defs><radialGradient id={gradient}><stop stopColor="#d8dcd4" stopOpacity=".55" /><stop offset="1" stopColor="#e9ece7" stopOpacity="0" /></radialGradient></defs>
    <ellipse cx="270" cy="264" rx="188" ry="30" fill={`url(#${gradient})`} />
    {(family === "linear-indoor" || family === "one-driver") && <g transform="translate(0 1)"><LightBars count={family === "one-driver" ? 5 : 6 + variant % 3} gold={family === "one-driver"} /></g>}
    {family === "under-canopy" && <g transform="translate(10 12)">{[0, 1].map(i => <g key={i} transform={`translate(${i * 48} ${i * 47})`}><path d="m85 150 260-98 17 7-261 100Z" fill="#d6d8ce" /><path d="m85 150 16 9v12l-16-9Z" fill="#555c55" /><path d="m101 159 261-100v12L101 171Z" fill="#8a9186" /><path d="m113 160 239-91" stroke="#fdb927" strokeWidth="5" strokeDasharray="4 3" /><path d="m113 165 239-91" stroke="#fff6ce" strokeWidth="2" /></g>)}</g>}
    {family === "hps" && <g><path d="m114 144 137-74 159 79-137 80Z" fill="#a0a59b" /><path d="m114 144 159 85-14 39-184-92Z" fill="#d4d7d0" /><path d="m273 229 137-80 30 28-181 91Z" fill="#b9beb4" /><path d="m127 150 127-61 137 65-120 65Z" fill="#e1e4db" /><path d="m146 155 119 60 92-54-110-52Z" fill="#abb1a3" /><path d="m176 156 112 53" stroke="#5c6059" strokeWidth="20" strokeLinecap="round" /><path d="m196 163 85 41" stroke="#fdb927" strokeWidth="13" strokeLinecap="round" /><path d="m197 161 84 41" stroke="#fff3c0" strokeWidth="5" strokeLinecap="round" /><path d="m198 81 30-15 46 22-31 15Z" fill="#3b443e" /></g>}
    {family === "greenhouse" && <g><path d="m117 153 202-85 83 42-200 91Z" fill="#b8bdb3" /><path d="m117 153 85 48v48l-85-44Z" fill="#596359" /><path d="m202 201 200-91v47l-200 92Z" fill="#939d8e" />{[0, 1, 2, 3, 4, 5, 6, 7, 8].map(i => <path key={i} d={`m${128+i*21} ${149-i*9} 69 35`} stroke="#dfe2d7" strokeWidth="5" />)}<path d="m212 215 179-80v9l-179 80Z" fill="#fdb927" /><path d="m212 232 179-80v5l-179 80Z" fill="#fff2b2" /></g>}
    {family === "spectrometer" && <g><path d="m221 74 80 15 13 156-89 14-30-18Z" fill="#545b54" /><path d="m229 78 72 11 13 156-81 6Z" fill="#9ca496" /><path d="m237 108 54 7 5 63-55 2Z" fill="#29372e" /><path d="m247 165 5-18 6 11 7-33 7 25 6-15 10 27" fill="none" stroke="#fdb927" strokeWidth="2" /><circle cx="267" cy="208" r="11" fill="#552583" /><circle cx="266" cy="207" r="5" fill="#c5b6d2" /><path d="M241 77v-15l36-2 10 26" fill="#d3d8cc" /><ellipse cx="260" cy="59" rx="20" ry="12" fill="#f6f6ec" /><path d="m243 234 49-1" stroke="#697262" strokeWidth="3" /></g>}
  </svg>;
}

export function HeroArt({ compact = false }: { compact?: boolean }) {
  const uid = useId().replace(/:/g, "");
  return <svg className="hero-art" viewBox="0 0 720 620" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Concept illustration of horticultural light bars above rows of plants. Photography placeholder.">
    <defs>
      <linearGradient id={`${uid}beam`} x1="0" y1="0" x2="0" y2="1"><stop stopColor="#fdb927" stopOpacity=".18"/><stop offset="1" stopColor="#fdb927" stopOpacity="0"/></linearGradient>
      <linearGradient id={`${uid}bg`} x1="0" y1="0" x2="1" y2="1"><stop stopColor="#ebece5"/><stop offset="1" stopColor="#f7f8f2"/></linearGradient>
      <pattern id={`${uid}grid`} width="52" height="52" patternUnits="userSpaceOnUse"><path d="M52 0H0v52" fill="none" stroke="#cfd4c8" strokeWidth=".65"/></pattern>
    </defs>
    <path d="M0 0h720v620H0Z" fill={`url(#${uid}bg)`}/><path d="M0 0h720v620H0Z" fill={`url(#${uid}grid)`} opacity=".65"/>
    <circle cx="520" cy="160" r="190" fill="none" stroke="#d9ddcf"/><circle cx="520" cy="160" r="130" fill="none" stroke="#d9ddcf"/>
    <path d="M200 0v150m290-150v164" stroke="#626b5d" strokeWidth="1.5"/>
    <path d="M161 221 42 582h641L527 220Z" fill={`url(#${uid}beam)`}/>
    <g transform="translate(6 60) scale(1.38)"><LightBars count={compact ? 5 : 7} gold /></g>
    <path d="m-50 485 450-117 440 198-460 122Z" fill="#d5dbc9"/>
    {[0, 1, 2, 3].map(row => <g key={row} transform={`translate(${-30+row*88} ${470+row*42})`}>
      <path d="m-65 44 456-122 28 13-455 123Z" fill="#a4b397" opacity=".35"/>
      {Array.from({length: 8}, (_,i) => <g key={i} transform={`translate(${i*55} ${-i*15})`}>
        <path d="M0 26V-8" stroke="#607958" strokeWidth="2"/>
        <path d="M0 13C-30 6-34-7-28-16-7-13-1-3 0 13Z" fill={row%2 ? "#8c9f78" : "#98a985"}/>
        <path d="M0 8C5-20 18-30 34-24 33-5 18 6 0 8Z" fill="#728a61"/>
        <path d="M0-3C-14-16-14-30-5-38 7-30 8-17 0-3Z" fill="#acbb8d"/>
        <path d="M0 13-25-13M0 8l28-28" stroke="#d1d9b7" strokeWidth=".65" opacity=".7"/>
      </g>)}
    </g>)}
    <path d="M32 32h14m-7-7v14m623 541h14m-7-7v14" stroke="#552583" strokeWidth="1"/>
    <text x="34" y="590" fill="#59634f" fontSize="9" fontFamily="Arial, sans-serif" letterSpacing="2">GROWING ENVIRONMENTS / CONCEPT VISUAL</text>
  </svg>;
}

export function CapabilityArt({ type }: { type: number }) {
  return <svg viewBox="0 0 460 300" role="img" aria-label={["Lighting research illustration placeholder", "Lighting engineering illustration placeholder", "Production illustration placeholder"][type]}>
    <path d="M0 0h460v300H0Z" fill={type === 1 ? "#edeae4" : "#f0f1eb"} />
    {type === 0 ? <g fill="none"><path d="M40 242h380M70 50v193" stroke="#b9b4c3"/>{[0,1,2,3].map(i=><path key={i} d={`M70 ${80+i*40}h330`} stroke="#d9d5df"/>)}<path d="m70 225 40-10 38-70 31 55 40-28 35 20 42-123 36 83 38 42 30 15" stroke="#552583" strokeWidth="3"/><path d="m70 225 40-10 38-70 31 55 40-28 35 20 42-123 36 83 38 42 30 15v35H70Z" fill="#552583" opacity=".06"/><circle cx="296" cy="69" r="7" fill="#fdb927"/><text x="80" y="52" fill="#777080" fontFamily="Arial" fontSize="11" letterSpacing="2">LIGHT / SPECTRUM / POSSIBILITY</text></g> : type === 1 ? <g transform="translate(-24 15)"><LightBars count={5}/><path d="M80 240v27h200m-200-6v12m200-12v12M430 101h21v128" fill="none" stroke="#8c7c9b" strokeWidth="1" strokeDasharray="3 4"/><text x="135" y="287" fontSize="9" fill="#796a85" fontFamily="Arial" letterSpacing="2">ENGINEERED WITH INTENT</text></g> : <g transform="translate(35 70)" fill="none" stroke="#81788a"><path d="m0 132 190-80 197 91-190 83Z" fill="#ddd9de" stroke="none"/>{[0,1,2,3,4,5].map(i=><g key={i} transform={`translate(${i*31} ${-i*13})`}><path d="m4 134 192 89" stroke="#b0a8b5" strokeWidth="8"/><path d="m4 139 192 89" stroke="#eee9ec" strokeWidth="2"/></g>)}<path d="M70 100V44l48-24 29 20v90" fill="#552583" stroke="none"/><path d="m119 21 37-63 58 32-8 65-22-8 8-48-31-16-29 51" fill="#72528d" stroke="none"/><path d="m206 54 34 30-15 18-31-31Z" fill="#fdb927" stroke="none"/><circle cx="155" cy="-20" r="11" fill="#b49ac5" stroke="none"/></g>}
  </svg>;
}
