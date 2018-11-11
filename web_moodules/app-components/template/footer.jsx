"use strict";

import React, { Component } from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="footer">
                &copy; {new Date().getFullYear()} Все права защищены
            </div>
        );
    }
}

export default Footer;