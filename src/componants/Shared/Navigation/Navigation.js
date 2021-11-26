import React, { useState } from 'react';
import { Container, Image, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Navigation.css'
import logo from '../../../images/logo.webp'
import userImage from '../../../images/user.webp'
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
const Navigation = () => {
    const { user, logOut, admin } = useAuth()
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 40) {
            setColorchange(true);

        }
        else {
            setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);



    return (
        <Navbar className={colorChange ? 'navbar sticky-nav' : 'bg-body  fw-bold'} sticky="top" expand="lg">
            <Container>
                <Navbar.Brand href="#"><img src={logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0 d-flex align-items-center nav-item"
                        style={{}}
                        navbarScroll
                    >

                        <Nav.Link ><Link className='nav-link' to='/home'>Home</Link></Nav.Link>
                        <Nav.Link ><Link className='nav-link' to='/service'>Service</Link></Nav.Link>
                        <Nav.Link ><Link className='nav-link' to='/about'>About</Link></Nav.Link>
                        <Nav.Link ><Link className='nav-link' to='/contact'>Contact</Link></Nav.Link>
                        <Nav.Link ><Link className='nav-link' to='/home'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16">
                                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                            </svg>
                        </Link></Nav.Link>


                        <Nav.Link href="#action2" className='dropdown'>

                            {!user.photoURL ? <Image width='40px' height='40px' src={userImage} roundedCircle /> :
                                <Image width='40px' height='40px' src={user?.photoURL} roundedCircle />}

                            <div className="d-flex flex-column dropdown-menu">
                                <p className='ms-3'>{user.displayName}</p>
                                {!admin && <NavDropdown.Item>

                                    <Link to='/dashboard/myorders' className='text-decoration-none text-dark'> Dashboard</Link>
                                </NavDropdown.Item>}

                                {admin && <NavDropdown.Item>

                                    <Link to='/dashboard' className='text-decoration-none text-dark'> Dashboard</Link>
                                </NavDropdown.Item>}

                                <NavDropdown.Divider />

                                {!user.email ? <NavDropdown.Item>

                                    <Link to='/login' className='custom-btn  btn text-decoration-none  p-0'>Login</Link>
                                </NavDropdown.Item> :
                                    <NavDropdown.Item >
                                        <button
                                            onClick={logOut}
                                            className='btn custom-btn p-0'>Log out</button>
                                    </NavDropdown.Item>}
                            </div>
                        </Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;