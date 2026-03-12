export default function Home() {
  return (
    <div style={{display:"flex",height:"100vh",fontFamily:"Inter, sans-serif",background:"#0f172a",color:"white"}}>

      {/* Sidebar */}
      <div style={{
        width:"230px",
        background:"#020617",
        padding:"25px",
        borderRight:"1px solid #1e293b"
      }}>
        <h2 style={{marginBottom:"30px",color:"#38bdf8"}}>FinPilot</h2>

        <ul style={{listStyle:"none",padding:0,lineHeight:"2.7",color:"#cbd5f5"}}>
          <li>📊 Dashboard</li>
          <li>🎓 Career AI</li>
          <li>📈 Finance Research</li>
          <li>📁 Excel Tools</li>
        </ul>
      </div>

      {/* Main Panel */}
      <div style={{flex:1,padding:"40px"}}>

        <h1 style={{marginBottom:"5px"}}>Finance AI Workspace</h1>
        <p style={{color:"#94a3b8"}}>AI tools for finance professionals & students</p>

        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(2,1fr)",
          gap:"25px",
          marginTop:"40px"
        }}>

          <div style={{
            background:"#1e293b",
            padding:"25px",
            borderRadius:"12px",
            border:"1px solid #334155"
          }}>
            <h3>🎓 Career Guide AI</h3>
            <p style={{color:"#94a3b8"}}>Get finance career guidance based on your profile.</p>
          </div>

          <div style={{
            background:"#1e293b",
            padding:"25px",
            borderRadius:"12px",
            border:"1px solid #334155"
          }}>
            <h3>📈 Finance Research AI</h3>
            <p style={{color:"#94a3b8"}}>Analyze companies and financial statements.</p>
          </div>

          <div style={{
            background:"#1e293b",
            padding:"25px",
            borderRadius:"12px",
            border:"1px solid #334155"
          }}>
            <h3>📁 Excel Combine Tool</h3>
            <p style={{color:"#94a3b8"}}>Merge multiple Excel files instantly.</p>
          </div>

          <div style={{
            background:"#1e293b",
            padding:"25px",
            borderRadius:"12px",
            border:"1px solid #334155"
          }}>
            <h3>🏦 Bank Reconciliation</h3>
            <p style={{color:"#94a3b8"}}>Match bank statements with books.</p>
          </div>

        </div>

      </div>

    </div>
  );
}
