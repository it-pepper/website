"use strict";

import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="header">
                <h1 className="header-logo">
                    IT PEPPER
                </h1>
                <div className="header-nav">
                    <ul className="list">
                        <li className="list-item">
                            <Link className="list-link" to="/">Home</Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Header;