import { useState } from 'react'

  const NAV = ['Home','About','Projects','Contact']
  const SKILLS = ['TypeScript','React','Node.js','Express','PostgreSQL','Drizzle','Tailwind CSS','Vite','Git','REST APIs']
  const PROJECTS = [
    {title:'Task Manager',desc:'Full-stack app with REST API, PostgreSQL & React dashboard',tags:['React','Express','PostgreSQL'],link:'https://github.com/9bzero/task-manager'},
    {title:'AlgoVis',desc:'Interactive visualizer for pathfinding & sorting algorithms',tags:['React','TypeScript','Canvas'],link:'https://github.com/9bzero/algo-vis'},
    {title:'Kanban Board',desc:'Drag-and-drop project board — zero DnD libraries',tags:['React','TypeScript'],link:'https://github.com/9bzero/kanban-board'},
    {title:'Expense Tracker',desc:'Finance tracker with live charts',tags:['React','Recharts'],link:'https://github.com/9bzero/expense-tracker'},
    {title:'Markdown Editor',desc:'Split-pane live markdown editor',tags:['React','marked'],link:'https://github.com/9bzero/markdown-editor'},
    {title:'Code Editor',desc:'Browser-based code editor with syntax highlighting',tags:['React','TypeScript'],link:'https://github.com/9bzero/code-editor'},
  ]

  const s: Record<string, React.CSSProperties> = {
    nav:{position:'fixed',top:0,width:'100%',background:'rgba(15,23,42,0.95)',backdropFilter:'blur(12px)',borderBottom:'1px solid #1e293b',display:'flex',justifyContent:'space-between',alignItems:'center',padding:'0 2rem',height:60,zIndex:100},
    hero:{minHeight:'100vh',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',textAlign:'center',padding:'2rem'},
    h1:{fontSize:'clamp(2rem,6vw,4rem)',fontWeight:800,background:'linear-gradient(135deg,#f8fafc,#38bdf8)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',marginBottom:'1rem'},
    card:{background:'#1e293b',border:'1px solid #334155',borderRadius:12,padding:'1.5rem',textDecoration:'none',color:'inherit',display:'block'},
    tag:{fontSize:'0.75rem',padding:'0.2rem 0.6rem',background:'#0f172a',border:'1px solid #0ea5e9',borderRadius:4,color:'#38bdf8'},
    btn:{padding:'0.75rem 1.75rem',borderRadius:8,fontWeight:700,cursor:'pointer',fontSize:'0.95rem'},
  }

  export default function App() {
    const [active, setActive] = useState('Home')
    return (
      <div style={{fontFamily:'Inter,system-ui,sans-serif',background:'#0f172a',color:'#e2e8f0',minHeight:'100vh'}}>
        <nav style={s.nav}>
          <span style={{fontWeight:700,color:'#38bdf8',fontFamily:'JetBrains Mono,monospace',fontSize:'1.1rem'}}>1Sultan<span style={{color:'#475569'}}>.dev</span></span>
          <div style={{display:'flex',gap:'1.5rem'}}>
            {NAV.map(n=><button key={n} onClick={()=>setActive(n)} style={{background:'none',border:'none',color:active===n?'#38bdf8':'#94a3b8',cursor:'pointer',fontWeight:500,fontSize:'0.9rem'}}>{n}</button>)}
          </div>
        </nav>
        <section style={s.hero}>
          <div style={{width:90,height:90,borderRadius:'50%',background:'linear-gradient(135deg,#0ea5e9,#38bdf8)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'2.5rem',marginBottom:'1.5rem',boxShadow:'0 0 40px rgba(56,189,248,0.3)'}}>👨‍💻</div>
          <h1 style={s.h1}>Hi, I'm 1Sultan</h1>
          <p style={{color:'#94a3b8',fontSize:'1.2rem',maxWidth:560,lineHeight:1.7,marginBottom:'2rem'}}>Full-Stack Developer crafting clean, purposeful software with <strong style={{color:'#38bdf8'}}>React</strong>, <strong style={{color:'#38bdf8'}}>TypeScript</strong> &amp; <strong style={{color:'#38bdf8'}}>Node.js</strong></p>
          <div style={{display:'flex',gap:'1rem',flexWrap:'wrap',justifyContent:'center'}}>
            <a href="https://github.com/9bzero" target="_blank" style={{...s.btn,background:'#38bdf8',color:'#0f172a',textDecoration:'none',display:'inline-block'}}>View GitHub →</a>
            <button onClick={()=>setActive('Projects')} style={{...s.btn,background:'#1e293b',color:'#e2e8f0',border:'1px solid #334155'}}>See Projects</button>
          </div>
        </section>
        <section style={{maxWidth:960,margin:'0 auto',padding:'4rem 2rem'}}>
          <h2 style={{fontSize:'1.75rem',fontWeight:700,color:'#38bdf8',marginBottom:'1.5rem'}}>Skills</h2>
          <div style={{display:'flex',flexWrap:'wrap',gap:'0.75rem',marginBottom:'4rem'}}>
            {SKILLS.map(sk=><span key={sk} style={{padding:'0.4rem 1rem',background:'#1e293b',border:'1px solid #334155',borderRadius:20,fontSize:'0.85rem',color:'#94a3b8'}}>{sk}</span>)}
          </div>
          <h2 style={{fontSize:'1.75rem',fontWeight:700,color:'#38bdf8',marginBottom:'1.5rem'}}>Featured Projects</h2>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))',gap:'1.25rem'}}>
            {PROJECTS.map(p=>(
              <a key={p.title} href={p.link} target="_blank" style={s.card}>
                <h3 style={{fontWeight:700,color:'#f1f5f9',marginBottom:'0.5rem'}}>{p.title}</h3>
                <p style={{color:'#94a3b8',fontSize:'0.85rem',lineHeight:1.6,marginBottom:'1rem'}}>{p.desc}</p>
                <div style={{display:'flex',gap:'0.5rem',flexWrap:'wrap'}}>{p.tags.map(t=><span key={t} style={s.tag}>{t}</span>)}</div>
              </a>
            ))}
          </div>
        </section>
      </div>
    )
  }