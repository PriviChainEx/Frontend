import {Chart as ChartJS} from 'chart.js/auto'
import {Bar} from 'react-chartjs-2'

function Portfolio() {
    const data = {
        labels: ['BTC','BSV','ETH','BNB','SOL','DOGE',],
        datasets: [
          {
            label: 'Profit',
            data: [200, 30, 400, 550, 660, 790, 800, 950],
            backgroundColor:'#22CCC4',
            barThickness:'flex',
            
          },
          {
            label: 'Loss',
            data: [-200, -30, -400, -550, -660, -790, -800, -950],
            barThickness:'flex',
            backgroundColor:'#BE3C5B'
          },
        ],
      };
      
      const options = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: false, // Ensure ticks start from the lowest value
              },
            },
          ],
        },
      };
    

    return (
      <>
      <div style={{margin:"3rem",display:'flex',flexDirection:'column',justifyContent:'space-around',gap:'40px'}}>
      <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around'}}>
          <div style={{width:'240px', height:'320px',border:'0.5px solid white',}}>
            <div style={{width:'240',height:'160px',borderBottom:'1px solid white',backgroundColor:'#092879',padding:'1rem'}}>
                <p style={{color:'white'}}>Current Value</p>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'start',gap:'32px'}}>
                <p style={{color:'white',fontSize:'24px'}}>$360.54</p>
                <p style={{color:'#55C793',marginTop:'0.5rem'}}>+4.66%</p>
            </div>
            <p style={{color:'white',}}>$345.95  <sub>(Last Week)</sub></p>
            </div>
            <div style={{width:'100%',height:'50%'}}></div>
          </div>
          <div style={{height:'320px'}}>
          <Bar data={data} options={options} style={{width:'800px',height:'150px',backgroundColor:'#000921'}}/>
          </div>
      </div>
      <div style={{width:'100%',height:'260px',border:'0.5px solid white'}}>
      <div style={{display:'flex',flexDirection:'column',gap:'40px'}}>

         <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',gap:'16px'}}>
         <div style={{width:'244px', height:'56px', backgroundColor:'#000F37',display:'flex',flexDirection:'row',justifyContent:"space-between",alignItems:'center'}}>
            <div style={{display:'flex',flexDirection:'column',justifyContent:'center',gap:'2px',alignItems:'center',margin:'1rem',paddingBottom:'8px'}}>
                <p style={{color:'white'}}>BTC</p>
                <sub style={{color:'white'}}>Bitcoin</sub>
            </div>
            <div>
                <p style={{color:'white'}}>$30,643.00</p>
            </div>
         </div>
         <div style={{width:'244px', height:'56px', backgroundColor:'#000F37',display:'flex',flexDirection:'row',justifyContent:"space-between",alignItems:'center'}}>
            <div style={{display:'flex',flexDirection:'column',justifyContent:'center',gap:'2px',alignItems:'center',margin:'1rem',paddingBottom:'8px'}}>
                <p style={{color:'white'}}>ETH</p>
                <sub style={{color:'white'}}>Ethereum</sub>
            </div>
            <div>
                <p style={{color:'white'}}>$30,643.00</p>
            </div>
         </div>
         <div style={{width:'244px', height:'56px', backgroundColor:'#000F37',display:'flex',flexDirection:'row',justifyContent:"space-between",alignItems:'center'}}>
            <div style={{display:'flex',flexDirection:'column',justifyContent:'center',gap:'2px',alignItems:'center',margin:'1rem',paddingBottom:'8px'}}>
                <p style={{color:'white'}}>XEM</p>
                <sub style={{color:'white'}}>NEM</sub>
            </div>
            <div>
                <p style={{color:'white'}}>$30,643.00</p>
            </div>
         </div>
         <div style={{width:'244px', height:'56px', backgroundColor:'#000F37',display:'flex',flexDirection:'row',justifyContent:"space-between",alignItems:'center'}}>
            <div style={{display:'flex',flexDirection:'column',justifyContent:'center',gap:'2px',alignItems:'center',margin:'1rem',paddingBottom:'8px'}}>
                <p style={{color:'white'}}>BSV</p>
                <sub style={{color:'white'}}>BTC Satoshi Vision</sub>
            </div>
            <div>
                <p style={{color:'white'}}>$30,643.00</p>
            </div>
         </div>
         
         </div>
         <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',gap:'16px'}}>
         <div style={{width:'244px', height:'56px', backgroundColor:'#000F37',display:'flex',flexDirection:'row',justifyContent:"space-between",alignItems:'center'}}>
            <div style={{display:'flex',flexDirection:'column',justifyContent:'center',gap:'2px',alignItems:'center',margin:'1rem',paddingBottom:'8px'}}>
                <p style={{color:'white'}}>BTC</p>
                <sub style={{color:'white'}}>Bitcoin</sub>
            </div>
            <div>
                <p style={{color:'white'}}>$30,643.00</p>
            </div>
         </div>
         <div style={{width:'244px', height:'56px', backgroundColor:'#000F37',display:'flex',flexDirection:'row',justifyContent:"space-between",alignItems:'center'}}>
            <div style={{display:'flex',flexDirection:'column',justifyContent:'center',gap:'2px',alignItems:'center',margin:'1rem',paddingBottom:'8px'}}>
                <p style={{color:'white'}}>ETH</p>
                <sub style={{color:'white'}}>Ethereum</sub>
            </div>
            <div>
                <p style={{color:'white'}}>$30,643.00</p>
            </div>
         </div>
         <div style={{width:'244px', height:'56px', backgroundColor:'#000F37',display:'flex',flexDirection:'row',justifyContent:"space-between",alignItems:'center'}}>
            <div style={{display:'flex',flexDirection:'column',justifyContent:'center',gap:'2px',alignItems:'center',margin:'1rem',paddingBottom:'8px'}}>
                <p style={{color:'white'}}>XEM</p>
                <sub style={{color:'white'}}>NEM</sub>
            </div>
            <div>
                <p style={{color:'white'}}>$30,643.00</p>
            </div>
         </div>
         <div style={{width:'244px', height:'56px', backgroundColor:'#000F37',display:'flex',flexDirection:'row',justifyContent:"space-between",alignItems:'center'}}>
            <div style={{display:'flex',flexDirection:'column',justifyContent:'center',gap:'2px',alignItems:'center',margin:'1rem',paddingBottom:'8px'}}>
                <p style={{color:'white'}}>BSV</p>
                <sub style={{color:'white'}}>BTC Satoshi Vision</sub>
            </div>
            <div>
                <p style={{color:'white'}}>$30,643.00</p>
            </div>
         </div>
         
         </div>
      </div>
      </div>
      </div>
      </>
    )
  }
  
  export default Portfolio