import React, {Component} from 'react';

export default class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-dark">
                <a className="navbar-brand text-white" href="#">
                    Navbar <span className="badge badge-pill badge-primary">{this.props.totalCounters}</span>
                </a>
            </nav>
        );
    }
}
