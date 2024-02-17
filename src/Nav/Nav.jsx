import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button} from "@nextui-org/react";
import { Link } from "react-router-dom";
function Nav() {

    return (
      <>
       <Navbar className="navbar">
      <NavbarBrand>
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
      <NavbarContent className="sm:flex gap-4" justify="start">
        <NavbarItem>
          <Link style={{color:'#E5E7EB' ,fontWeight:'500'}} to='/trade'>
            TRADE
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link to='/portfolio' style={{color:'#E5E7EB'}}>
         PORTFOLIO
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link to='/asset' style={{color:'#E5E7EB'}}>
          HISTORY
          </Link>
        </NavbarItem>    
      </NavbarContent>
      
    </Navbar>
      </>
    )
  }
  
  export default Nav