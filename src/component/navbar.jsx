import React, {Component} from 'react';

export default class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-dark">
                <a className="navbar-brand text-white" href="#">
                    Navbar
                </a>
            </nav>
        );
    }
}