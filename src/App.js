import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import Home from './pages/Home.js';

class App extends React.Component{
    render() {
        return (
            <>
                <Navbar sticky="top" style={{backgroundColor:"rgba(0, 123, 255, 0.8)"}} variant="dark" expand="lg">
                    <Navbar.Brand href="/">Tim Johnson Portfolio</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="https://www.linkedin.com/in/tim-johnson-5b0021a7/" className="mr-auto" target="_blank">LinkedIn</Nav.Link>
                            <Nav.Link href="https://github.com/TimUK" className="mr-auto" target="_blank">GitHub</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                <Router>
                    <Route exact path="/" render={props=>(
                        <Home />
                    )}/>
                
                </Router>
            </>
        );
    }
}

export default App;
