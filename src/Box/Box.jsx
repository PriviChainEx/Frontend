import {Modal, ModalContent, ModalHeader, ModalBody,  Button, useDisclosure} from "@nextui-org/react";
import {Chart as ChartJS} from 'chart.js/auto'
import {Line} from 'react-chartjs-2'

function Box() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    return (
      <>
      <div style={{display:'flex',flexDirection:'row'}}>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size='3xl'>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1" style={{backgroundColor:'#092879',color:'white'}}>MARKET INFO</ModalHeader>
              <ModalBody style={{backgroundColor:'#000921',color:'white'}}>
                <div style={{display:'flex', flexDirection:'row', gap:'32px'}}>
                    <p>CRYPTO</p>
                    <p>STOCKS</p>
                    <p>COMMODITIES</p>
                    <p>FOREX</p>
                    <p>INDICES</p>
                    <input type="text" className="modal__input"/>
                </div>
                <div>
                    <table>
                    <thead>
    <tr >
      <th scope="col" >MARKET</th>
      <th scope="col" style={{paddingRight:'50px'}}>24 Hour</th>
      <th scope="col" style={{paddingRight:'50px'}}>Price</th>
      <th scope="col" style={{paddingRight:'50px'}}>7 Days</th>
      <th scope="col" style={{paddingRight:'50px'}}>This Month</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" style={{color:'white'}}>ETH/USD</th>
      <td>0.10016</td>
      <td>22</td>
      <td><Line
    width={100}
    height={50}
    options={{
        plugins: {
            legend: false, // Hide legend
            tooltip: false // Hide tooltip
        },
        scales: {
            x: {
                display: false // Hide x-axis
            },
            y: {
                display: false // Hide y-axis
            }
        }
    }}
    data={{
        labels: [13, 14, 15, 16, 17, 18, 19, 20],
        datasets: [{
            label: 'Revenue',
            data: [200, 30, 400, 550, 660, 790, 800, 950],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    }}
/>
</td>
<td><Line
    width={100}
    height={50}
    options={{
        plugins: {
            legend: false, // Hide legend
            tooltip: false // Hide tooltip
        },
        scales: {
            x: {
                display: false // Hide x-axis
            },
            y: {
                display: false // Hide y-axis
            }
        }
    }}
    data={{
        labels: [13, 14, 15, 16, 17, 18, 19, 20],
        datasets: [{
            label: 'Revenue',
            data: [200, 30, 400, 550, 660, 790, 800, 950],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    }}
/>
</td>
        
    </tr>
    <tr>
      <th scope="row" style={{color:'white'}}>ETH/USD</th>
      <td>0.10016</td>
      <td>22</td>
      <td><Line
    width={100}
    height={50}
    options={{
        plugins: {
            legend: false, // Hide legend
            tooltip: false // Hide tooltip
        },
        scales: {
            x: {
                display: false // Hide x-axis
            },
            y: {
                display: false // Hide y-axis
            }
        }
    }}
    data={{
        labels: [13, 14, 15, 16, 17, 18, 19, 20],
        datasets: [{
            label: 'Revenue',
            data: [200, 30, 400, 550, 660, 790, 800, 950],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    }}
/>
</td>
<td><Line
    width={100}
    height={50}
    options={{
        plugins: {
            legend: false, // Hide legend
            tooltip: false // Hide tooltip
        },
        scales: {
            x: {
                display: false // Hide x-axis
            },
            y: {
                display: false // Hide y-axis
            }
        }
    }}
    data={{
        labels: [13, 14, 15, 16, 17, 18, 19, 20],
        datasets: [{
            label: 'Revenue',
            data: [200, 30, 400, 550, 660, 790, 800, 950],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    }}
/>
</td>
        
    </tr>
    <tr>
      <th scope="row" style={{color:'white'}}>ETH/USD</th>
      <td>0.10016</td>
      <td>22</td>
      <td><Line
    width={100}
    height={50}
    options={{
        plugins: {
            legend: false, // Hide legend
            tooltip: false // Hide tooltip
        },
        scales: {
            x: {
                display: false // Hide x-axis
            },
            y: {
                display: false // Hide y-axis
            }
        }
    }}
    data={{
        labels: [13, 14, 15, 16, 17, 18, 19, 20],
        datasets: [{
            label: 'Revenue',
            data: [200, 30, 400, 550, 660, 790, 800, 950],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    }}
/>
</td>
<td><Line
    width={100}
    height={50}
    options={{
        plugins: {
            legend: false, // Hide legend
            tooltip: false // Hide tooltip
        },
        scales: {
            x: {
                display: false // Hide x-axis
            },
            y: {
                display: false // Hide y-axis
            }
        }
    }}
    data={{
        labels: [13, 14, 15, 16, 17, 18, 19, 20],
        datasets: [{
            label: 'Revenue',
            data: [200, 30, 400, 550, 660, 790, 800, 950],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    }}
/>
</td>
        
    </tr>
    <tr>
      <th scope="row" style={{color:'white'}}>ETH/USD</th>
      <td>0.10016</td>
      <td>22</td>
      <td><Line
    width={100}
    height={50}
    options={{
        plugins: {
            legend: false, // Hide legend
            tooltip: false // Hide tooltip
        },
        scales: {
            x: {
                display: false // Hide x-axis
            },
            y: {
                display: false // Hide y-axis
            }
        }
    }}
    data={{
        labels: [13, 14, 15, 16, 17, 18, 19, 20],
        datasets: [{
            label: 'Revenue',
            data: [200, 30, 400, 550, 660, 790, 800, 950],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    }}
/>
</td>
<td><Line
    width={100}
    height={50}
    options={{
        plugins: {
            legend: false, // Hide legend
            tooltip: false // Hide tooltip
        },
        scales: {
            x: {
                display: false // Hide x-axis
            },
            y: {
                display: false // Hide y-axis
            }
        }
    }}
    data={{
        labels: [13, 14, 15, 16, 17, 18, 19, 20],
        datasets: [{
            label: 'Revenue',
            data: [200, 30, 400, 550, 660, 790, 800, 950],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    }}
/>
</td>
        
    </tr>
    <tr>
      <th scope="row" style={{color:'white'}}>ETH/USD</th>
      <td>0.10016</td>
      <td>22</td>
      <td><Line
    width={100}
    height={50}
    options={{
        plugins: {
            legend: false, // Hide legend
            tooltip: false // Hide tooltip
        },
        scales: {
            x: {
                display: false // Hide x-axis
            },
            y: {
                display: false // Hide y-axis
            }
        }
    }}
    data={{
        labels: [13, 14, 15, 16, 17, 18, 19, 20],
        datasets: [{
            label: 'Revenue',
            data: [200, 30, 400, 550, 660, 790, 800, 950],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    }}
/>
</td>
<td><Line
    width={100}
    height={50}
    options={{
        plugins: {
            legend: false, // Hide legend
            tooltip: false // Hide tooltip
        },
        scales: {
            x: {
                display: false // Hide x-axis
            },
            y: {
                display: false // Hide y-axis
            }
        }
    }}
    data={{
        labels: [13, 14, 15, 16, 17, 18, 19, 20],
        datasets: [{
            label: 'Revenue',
            data: [200, 30, 400, 550, 660, 790, 800, 950],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    }}
/>
</td>
        
    </tr>
    
  </tbody>
                    </table>
                </div>
            
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
        <div className="selector">
        <Button onPress={onOpen} style={{backgroundColor:'#092879',color:'white',width:'100%' , height:'100%'}} radius='none'>BTC/USD</Button>
        </div>
        <div style={{display:'flex',justifyContent:'center',flexDirection:'column',width:'130px',height:'60px',alignItems:'center'}}>
            <p style={{color:'#28C59F'}}>62,238.00</p>
            <p style={{color:'white',fontSize:'14px'}}>Last market price</p>
        </div>
        <div style={{display:'flex',justifyContent:'center',flexDirection:'column',width:'130px',height:'60px',alignItems:'center'}}>
            <p style={{color:'#28C59F'}}>1.75%</p>
            <p style={{color:'white'}}>24h change</p>
        </div>
        <div style={{display:'flex',justifyContent:'center',flexDirection:'column',width:'130px',height:'60px',alignItems:'center'}}>
            <p style={{color:'#28C59F'}}>63,597.80</p>
            <p style={{color:'white'}}>24h high</p>
        </div>
        <div style={{display:'flex',justifyContent:'center',flexDirection:'column',width:'130px',height:'60px',alignItems:'center'}}>
            <p style={{color:'#28C59F'}}>60,322.6</p>
            <p style={{color:'white'}}>24h low</p>
        </div>
        <div style={{display:'flex',justifyContent:'center',flexDirection:'column',width:'130px',height:'60px',alignItems:'center'}}>
            <p style={{color:'#28C59F'}}>2,548,722,097.16</p>
            <p style={{color:'white'}}>Market Volume</p>
        </div>
      </div>
      </>
    )
  }
  
  export default Box