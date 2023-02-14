import React, { useContext } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { SignedIn } from "../../Contexts/SignedIn";
import './NavigationBar.css';

function NavigationBar() {

    const {setIsLoggedIn} = useContext(SignedIn);

    function handleSignOut() {
        setIsLoggedIn(false);
        localStorage.removeItem('userAndPass');
    }

    return(
        <Navbar className="navbar">
                <Nav.Link href="./">Love Stories</Nav.Link>
                <Nav.Link href="./success-stories">Success Stories</Nav.Link>            
                <Nav.Link href="./meet-the-team">Meet The Team</Nav.Link>      
                <Nav.Link onClick={handleSignOut}>Sign Out</Nav.Link>
        </Navbar>
    )
}

export default NavigationBar;