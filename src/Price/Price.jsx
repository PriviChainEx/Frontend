import { useState } from "react";
import { Button } from "@nextui-org/react"

import {Modal, ModalContent,ModalBody, ModalFooter,useDisclosure,Spinner,Input} from "@nextui-org/react";

function Price() {
  let [visible, setVisible] = useState(false)
  let [showSuccess, setShowSuccess] = useState(false);
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  const handleConfirm = () => {
    setVisible(true);

    // Simulate a delay of 1 second before showing the success message
    setTimeout(() => {
      setShowSuccess(true);
    }, 1000);
  };
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
        <Button onPress={onOpen} className="buy__button">Buy</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="md">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody style={{backgroundColor:'#000920',padding:'2rem'}}>
            { !visible ? <div>
              <h1 style={{color:'white'}}>TRANSACTION DETAILS</h1>
              <Input type="number" isReadOnly placeholder="Apple" variant="bordered" style={{borderColor:'#ffffff'}} label="Company Name" className="inputClassName"/>
              <Input type="number" isReadOnly placeholder="5000" variant="bordered" style={{borderColor:'#ffffff'}} label="No of Stocks" className="inputClassName"/>
              <Input type="number" isReadOnly placeholder="6549819465498169" variant="bordered" style={{borderColor:'#ffffff'}} label="Hash" className="inputClassName"/>
              <Input type="number" isReadOnly placeholder="184.32" variant="bordered" style={{borderColor:'#ffffff'}} label="Price" className="inputClassName"/>
              <Input type="number" isReadOnly placeholder="921600" variant="bordered" style={{borderColor:'#ffffff'}} label="Total" className="inputClassName"/>
                <ModalFooter>
                <Button  style={{backgroundColor:'#06e7ed',color:'black', fontWeight:'600'}} onClick={handleConfirm}>
                  Confirm
                </Button>
              </ModalFooter>
            </div> : null
              
            }
                {visible && !showSuccess ?  <div>
                  <div style={{textAlign:'center'}}>
                <Spinner/>
                  <p style={{color:'white',fontSize:'20px'}}>Waiting for Confirmation</p>
                  <p style={{color:'white'}}>Confirm this Transaction in your wallet</p>
                  </div>
                  </div>     
                  : null}
                {
                  showSuccess ? <div style={{textAlign:'center'}}>
                  <p style={{color:'white',fontSize:'16px'}}>✔</p>
                  <p style={{color:'white',fontSize:'20px'}}>Order Successful</p>
                  </div> : null
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
      <th scope="col" >Company</th>
      <th scope="col" style={{paddingRight:'50px'}}>Price</th>
      <th scope="col" style={{paddingRight:'50px'}}>%Change</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Microsoft</th>
      <td>404.3</td>
      <td>0.61</td>
    </tr>
    <tr>
      <th scope="row">Amazon INC</th>
      <td>169.51</td>
      <td>0.17</td>
    </tr><tr>
      <th scope="row">Apple Inc</th>
      <td>184.32</td>
      <td>1.55</td>
    </tr><tr>
      <th scope="row">Meta </th>
      <td>473.32</td>
      <td>0.33</td>
    </tr>
    <tr>
      <th scope="row">NVIDIA Corp</th>
      <td>726.13</td>
      <td>0.43</td>
    </tr>
    <tr>
      <th scope="row">ASUSTEK Inc</th>
      <td>479.50</td>
      <td>3.34</td>
    </tr>
    <tr>
      <th scope="row">Intel Corp</th>
      <td>43.51</td>
      <td>0.54</td>
    </tr>
    <tr>
      <th scope="row">AMD</th>
      <td>173.87</td>
      <td>1.63</td>
    </tr>
  </tbody>
        </div>
       </div>
      </>
    )
  }
  
export default Price