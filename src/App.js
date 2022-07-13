import { Outlet } from "react-router-dom";

import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Nav from "react-bootstrap/Nav";
import Navbar from 'react-bootstrap/Navbar'

import './App.css';

function App({connectToWallet}) {
  
  return (
    <div className="App">
      <div className="navheader" style={{display:"flex", justifyContent:"space-around", alignItems:"center",   borderBottom: "1px solid"}}>
        <div>
          <Navbar bg="#38252a" variant="dark">
            <Container>
            <Navbar.Brand href="#home"><img src="https://velocita.club/images/gradient-logo.png"/></Navbar.Brand>
            </Container>
          </Navbar>
        </div>
        <div>
          <Navbar bg="#38252a" variant="dark">
            <Container >
            <Nav className="me-auto" style={{float:"right"}}>
              <Nav.Link href="/vc-nft-carshare-frontend/">About</Nav.Link>
              <Nav.Link href="/vc-nft-carshare-frontend/cars">Cars</Nav.Link>
                <Button variant="primary" >
                  Connect to wallet
                </Button>
            </Nav>
            </Container>
          </Navbar>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default App;
