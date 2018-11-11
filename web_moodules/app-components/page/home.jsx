"use strict";

import React, { Component } from 'react';

import Header from 'app-components/template/header';
import Main from 'app-components/template/main-one-column';
import Footer from 'app-components/template/footer';

class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="wrapper">
                <Header />
                <Main />
                <Footer />
            </div>
        );
    }
}

export default HomePage;