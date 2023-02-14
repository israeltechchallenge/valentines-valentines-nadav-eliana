import React, { useContext } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { SignedIn } from "../../Contexts/SignedIn";

function NavigationBar() {

    const {setIsLoggedIn} = useContext(SignedIn);

    function handleSignOut() {
        setIsLoggedIn(false);
        localStorage.removeItem('userAndPass');
    }

    return(
        <Navbar bg='light' expand="lg">
                <Nav.Link href="./">Love Stories</Nav.Link>
                <Nav.Link href="./success-stories">Success Stories</Nav.Link>            
                <Nav.Link href="./meet-the-team">Meet The Team</Nav.Link>      
                <Nav.Link onClick={handleSignOut}>Sign Out</Nav.Link>
        </Navbar>
    )
}

export default NavigationBar;