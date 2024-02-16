import { useState } from "react";
import { Button } from "@nextui-org/react"

import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter,useDisclosure,Spinner} from "@nextui-org/react";

function Price() {
  let [visible, setVisible] = useState(true)
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
    return (
      <>
       <div style={{backgroundColor:'#000921',}}>
        <div style={{display:'flex', flexDirection:'row',textAlign:'center',justifyContent:'start'}}>
            <div style={{width:'120px', height:'30px',color:'white',backgroundColor:'#092879'}}>BUY</div>
            <div style={{width:'120px' , height:'30px' , border:'0.5px solid white',color:'white'}}>SELL</div>
        </div>
        <div className="limit">
            <p style={{color:'#5181FF'}}>LIMIT</p>
            <p>MARKET</p>
        </div>
        <div style={{margin:'8px'}}>
            <input type="number" placeholder="Limit Price" className="price__input"/>
            <input type="number" placeholder="Amount(BTC)" className="price__input "/>
        </div>
        <p style={{color:'white' , textAlign:"right"}}>Price: 1 BTC = 30536 USD</p>
        <input type="number" placeholder="TOTAL(USD)" className="price__input "/>
        <p style={{color:'white' , textAlign:"right"}}>Available: 1.5031 USDT</p>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'16px'}}>
        <Button onPress={onOpen} className="buy__button">Buy 0.45 BTC</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="xs">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody style={{backgroundColor:'#000920',padding:'2rem'}}>
                {visible ?  <div>
                  <div style={{textAlign:'center'}}>
                <Spinner/>
                  <p style={{color:'white',fontSize:'20px'}}>Waiting for Confirmation</p>
                  <p style={{color:'white'}}>Confirm this Transaction in your wallet</p>
                  </div>
                  </div>     
                  :
                  <div style={{textAlign:'center'}}>
                  <p style={{color:'white',fontSize:'20px'}}>Order Successful</p>
                  <p style={{color:'white'}}>Limit Order | 34 BSV</p>
                  </div>
                }
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
        </div>
        <div className="market__container">
          <p style={{color:'#5181FF',fontWeight:'500'}}>MARKET TRADES</p>
          <p style={{color:'white'}}>MARKET INFO</p>
        </div>
        <div>
        <thead>
    <tr >
      <th scope="col" >Price(USDT)</th>
      <th scope="col" style={{paddingRight:'50px'}}>Amount(BTC)</th>
      <th scope="col" style={{paddingRight:'50px'}}>Total</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Chris</th>
      <td>0.10016</td>
      <td>22</td>
    </tr>
    <tr>
      <th scope="row">Chris</th>
      <td>0.10016</td>
      <td>22</td>
    </tr><tr>
      <th scope="row">Chris</th>
      <td>0.10016</td>
      <td>22</td>
    </tr><tr>
      <th scope="row">Chris</th>
      <td>0.10016</td>
      <td>22</td>
    </tr><tr>
      <th scope="row">Chris</th>
      <td>0.10016</td>
      <td>22</td>
    </tr><tr>
      <th scope="row">Chris</th>
      <td>0.10016</td>
      <td>22</td>
    </tr><tr>
      <th scope="row">Chris</th>
      <td>0.10016</td>
      <td>22</td>
    </tr>
    <tr>
      <th scope="row">Chris</th>
      <td>0.10016</td>
      <td>22</td>
    </tr>
  </tbody>
        </div>
       </div>
      </>
    )
  }
  
export default Price