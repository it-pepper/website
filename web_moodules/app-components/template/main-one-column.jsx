"use strict";

import React, { Component } from 'react';

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="main">
                <div className="one-column">{this.props.children}</div>
            </div>
        );
    }
}

export default Main;