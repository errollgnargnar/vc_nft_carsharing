import { Outlet,  Routes,
  Route, } from "react-router-dom";

import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Nav from "react-bootstrap/Nav";
import Navbar from 'react-bootstrap/Navbar'

import About from './routes/About';
import Car from './routes/Car';
import Cars from './routes/Cars';

import './App.css';

function App({connectToWallet}) {
  
  return (
    <div>
      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<About />} />
          <Route path="cars" element={<Cars />} >
              <Route
              index
              element={
                <main style={{ padding: "1rem" }}>
                  <p style={{textAlign:"center"}}>Select a Vehicle</p>
                </main>
              }
            />
            <Route path=":carId" element={<Car />} />
          </Route>
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />

        </Route> 
      </Routes>
    </div>
  );
}

function Layout() {
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
              <Nav.Link href="/">About</Nav.Link>
              <Nav.Link href="/cars">Cars</Nav.Link>
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
