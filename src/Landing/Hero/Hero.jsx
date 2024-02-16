function Hero() {

    return (
      <>
       <div>
       <div className="kitchen__container">
        <img src="../src/assets/hero.jpg" alt="hero" className="kitchen__image" />
        <div className="kitchen__overlay">
          <p className="kitchen__text">DECENTRALIZED TERMINAL</p>
        </div>
        </div>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'2rem'}}>
        <div className="about__us">
            <p style={{fontSize:'32px',fontWeight:'500'}}>The Bloomberg Terminal revolutionized an industry by bringing transparency to financial markets. More than four decades on, it remains at the cutting edge of innovation and information delivery — with fast access to news, data, unique insight and trading tools helping leading decision makers turn knowledge into action.</p>
        </div>
        </div>

        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',flexWrap:'wrap',gap:'32px',marginTop:'3rem'}}>
            <div style={{width:'350px',height:'350px',border:'3px solid #454FFA',textAlign:'center',display:'flex',flexDirection:'column', gap:'32px',justifyContent:'center',alignItems:'center',borderRadius:'16px'}}>
                <h1 style={{color:'white',fontSize:'26px',fontWeight:'500'}}>Centralized Access</h1>
                <p style={{color:'white'}}>Easily manage multiple exchanges and trading pairs in one place.</p>
            </div>
            <div style={{width:'350px',height:'350px',border:'3px solid #454FFA',textAlign:'center',display:'flex',flexDirection:'column', gap:'32px',justifyContent:'center',alignItems:'center',borderRadius:'16px'}}>
                <h1 style={{color:'white',fontSize:'26px',fontWeight:'500'}}>Real Time Marketing Data</h1>
                <p style={{color:'white'}}>Access up-to-date market information for informed decision-making.</p>
            </div>
            <div style={{width:'350px',height:'350px',border:'3px solid #454FFA',textAlign:'center',display:'flex',flexDirection:'column', gap:'32px',justifyContent:'center',alignItems:'center',borderRadius:'16px'}}>
                <h1 style={{color:'white',fontSize:'26px',fontWeight:'500'}}>Advanced Charting Tools</h1>
                <p style={{color:'white'}}>Utilize sophisticated charting tools for in-depth technical analysis.</p>
            </div>
            <div style={{width:'350px',height:'350px',border:'3px solid #454FFA',textAlign:'center',display:'flex',flexDirection:'column', gap:'32px',justifyContent:'center',alignItems:'center',borderRadius:'16px'}}>
                <h1 style={{color:'white',fontSize:'26px',fontWeight:'500'}}>Portfolio Management</h1>
                <p style={{color:'white'}}>Track portfolio performance across multiple exchanges and wallets.</p>
            </div>
            <div style={{width:'350px',height:'350px',border:'3px solid #454FFA',textAlign:'center',display:'flex',flexDirection:'column', gap:'32px',justifyContent:'center',alignItems:'center',borderRadius:'16px'}}>
                <h1 style={{color:'white',fontSize:'26px',fontWeight:'500'}}>Security</h1>
                <p style={{color:'white'}}>Ensure account and data security with robust security measures.</p>
            </div>
            <div style={{width:'350px',height:'350px',border:'3px solid #454FFA',textAlign:'center',display:'flex',flexDirection:'column', gap:'32px',justifyContent:'center',alignItems:'center',borderRadius:'16px'}}>
                <h1 style={{color:'white',fontSize:'26px',fontWeight:'500'}}>Order Management</h1>
                <p style={{color:'white'}}>Efficiently place, modify, and cancel orders directly from the terminal.</p>
            </div>
        </div>
       </div>
      </>
    )
  }
  
  export default Hero