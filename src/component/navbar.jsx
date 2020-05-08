import React, {Component} from 'react';

export default class NavBar extends Component {
    render() {

        const {totalCounters, totalQuantity} = this.props;

        return (
            <nav className="navbar navbar-light bg-dark">
                <a className="navbar-brand text-white" href="#">
                    Navbar -
                    Items: <span className="badge badge-pill badge-primary">{totalCounters}</span> &nbsp;
                    Quantity: <span className="badge badge-pill badge-primary">{totalQuantity}</span>
                </a>
            </nav>
        );
    }
}
