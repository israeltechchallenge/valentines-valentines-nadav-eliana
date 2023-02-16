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
<<<<<<< HEAD
        <Navbar className="navbar">
=======
        <Navbar bg='light' expand="lg">
                <Nav.Link href="./find-love/">Find Love</Nav.Link>
>>>>>>> 6055f8b62cd93e308209edfed0f91ffd4f70bfd8
                <Nav.Link href="./">Love Stories</Nav.Link>
                <Nav.Link href="./success-stories">Success Stories</Nav.Link>            
                <Nav.Link href="./meet-the-team">Meet The Team</Nav.Link>      
                <Nav.Link onClick={handleSignOut}>Sign Out</Nav.Link>
        </Navbar>
    )
}

export default NavigationBar;