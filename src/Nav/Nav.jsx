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
          <Link style={{color:'#E5E7EB'}} to='/trade'>
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
         ASSET
          </Link>
        </NavbarItem>    
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link}  href="#" variant="solid" size="sm" className="connect__button">
            Connect wallet
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
      </>
    )
  }
  
  export default Nav