import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import './Header.scss';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import UserBox from "./UserBox/UserBox";


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle : false
        }
    }
    switchHandler(){
        this.setState( {
            toggle: !this.state.toggle
        })

    }

    render() {

        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Instagram</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link className="nav-link" to="/">Home</Link>
                        <Link className="nav-link" to="/profile">Profile</Link>
                        <Link className="nav-link" to="/post/create">Create Post</Link>
                    </Nav>
                    <div inline="true">
                        <div className="user">
                            <div className="user-avatar">
                                <FontAwesomeIcon icon={faUser} />
                                <UserBox />
                            </div>
                            <div className="user-text">
                            </div>

                        </div>
                    </div>
                </Navbar.Collapse>
            </Navbar>

        );
    }
}

export default Header;