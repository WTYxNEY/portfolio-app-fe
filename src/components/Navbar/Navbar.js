import React, { useState, useEffect } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavLink,
    NavbarText
} from 'reactstrap';
import decode from 'jwt-decode';
import { useDispatch } from 'react-redux'

import { LOGOUT } from '../../constants/actionTypes'

const NavbarComponents = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const location = useLocation();
    const history = useHistory();
    const distpatch = useDispatch();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    const logout = () => {
        distpatch({ type: LOGOUT });

        history.push('/')
        setUser(null)
        window.location.reload();
    }

    useEffect(() => {
        const token = user?.token;

        if (token) {
            const decodedToken = decode(token);

            if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }

        setUser(JSON.parse(localStorage.getItem('profile')))
    }, [location])

    const unauthenticatedNavBar = () => {
        return (
            <>
                <NavLink>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <li className="nav-item nav-link">
                            Home
                    </li>
                    </Link>
                </NavLink>
                <NavLink>
                    <Link to="/all-portfolio/all" style={{ textDecoration: 'none' }}>
                        <li className="nav-item nav-link">
                            All
                    </li>
                    </Link>
                </NavLink>
                <NavLink>
                    <Link to="/auth" style={{ textDecoration: 'none' }}>
                        <li className="nav-item nav-link">
                            Login
                    </li>
                    </Link>
                </NavLink>
            </>
        )
    }

    const authenticatedNavBar = () => {

        return (
            <>
                <NavLink>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <li className="nav-item nav-link">
                            Home
                    </li>
                    </Link>
                </NavLink>
                <NavLink>
                    <Link to="/all-portfolio/all" style={{ textDecoration: 'none' }}>
                        <li className="nav-item nav-link">
                            All
                    </li>
                    </Link>
                </NavLink>
                <NavLink>
                    <Link to={`/portfolio/${user?.result._id}`} style={{ textDecoration: 'none' }}>
                        <li className="nav-item nav-link">
                            My Blog
                    </li>
                    </Link>
                </NavLink>

                <NavLink onClick={logout}>
                    <Link style={{ textDecoration: 'none' }}>
                        <li className="nav-item nav-link">
                            Logout
                        </li>
                    </Link>
                </NavLink>
            </>
        )
    }

    return (
        <div className="navbar-container">
            <Navbar color="dark" dark expand="md" style={{ padding: '20px', position: 'fixed', top: '0', width: '100%', zIndex: '2' }}>
                <NavbarBrand href="/" style={{ fontSize: '24px' }} >Portfolio</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        {!user ? unauthenticatedNavBar() : authenticatedNavBar()}
                    </Nav>
                    {
                        user?.result ? <NavbarText style={{ marginLeft: 'auto' }}> {user?.result.name ? "Hi, " + user?.result.name : null} </NavbarText>
                            :
                            null
                    }
                </Collapse>
            </Navbar>
        </div>
    )
};

export default NavbarComponents;

