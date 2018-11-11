"use strict";

import path from 'path';

//let _web_moodules_dir = path.join(global.DEFAULT_DIR, 'web_moodules');
//require('app-module-path').addPath(_web_moodules_dir);
//console.log("path::def", global.DEFAULT_DIR);
//console.log("path::web_moodules", _web_moodules_dir);

import React, { Component } from 'react';
import HomePage from 'app-components/page/home';

ReactDOM.render(
    <HomePage />,
    document.getElementById("page")
);