import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from './../../img/logo.png'

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/"> <img className='' width={150} src={logo} alt=""  /> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/inventory">Inventory</Nav.Link>
                            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>


                        </Nav>
                        <Nav>


                            {
                                user ?
                                    <>
                                    <Nav.Link as={Link} to="/addnewitem">Add Item</Nav.Link>
                                        <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>sign out</button>

                                    </>
                                    :
                                    <>
                                        <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>
                                        <Nav.Link as={Link} to="/signin">
                                            Sign In
                                        </Nav.Link>
                                    </>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;