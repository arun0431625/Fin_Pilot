export default function Home() {
  return (
    <div style={{display:"flex",height:"100vh",fontFamily:"Arial"}}>

      {/* Sidebar */}
      <div style={{
        width:"220px",
        background:"#111",
        color:"white",
        padding:"20px"
      }}>
        <h2>FinPilot</h2>

        <ul style={{listStyle:"none",padding:0,lineHeight:"2.5"}}>
          <li>Dashboard</li>
          <li>Career AI</li>
          <li>Finance Research</li>
          <li>Excel Tools</li>
        </ul>
      </div>

      {/* Main Panel */}
      <div style={{flex:1,padding:"40px"}}>

        <h1>Finance AI Workspace</h1>
        <p>Tools to help finance professionals & students.</p>

        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(2,1fr)",
          gap:"20px",
          marginTop:"30px"
        }}>

          <div style={{border:"1px solid #ddd",padding:"20px",borderRadius:"8px"}}>
            <h3>Career Guide AI</h3>
            <p>Get finance career guidance based on your profile.</p>
          </div>

          <div style={{border:"1px solid #ddd",padding:"20px",borderRadius:"8px"}}>
            <h3>Finance Research AI</h3>
            <p>Analyze companies and financial statements.</p>
          </div>

          <div style={{border:"1px solid #ddd",padding:"20px",borderRadius:"8px"}}>
            <h3>Excel Combine Tool</h3>
            <p>Merge multiple Excel files instantly.</p>
          </div>

          <div style={{border:"1px solid #ddd",padding:"20px",borderRadius:"8px"}}>
            <h3>Bank Reconciliation</h3>
            <p>Match bank statements with books.</p>
          </div>

        </div>

      </div>

    </div>
  );
}
