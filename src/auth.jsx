import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom'; 
import { routerReducer } from 'react-router-redux';
import createBrowserHistory from "history/createBrowserHistory";
const browserHistory = createBrowserHistory();

// import Cookies from 'js-cookie';

const store = createStore(
    combineReducers({
        routing: routerReducer
    })
);

import Home from 'app-components/page/home';

ReactDOM.render(
    <Provider store={store}>
        <Router context={store} history={browserHistory}>
            <Switch>
                <Route path="*" component={Home} />
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('page')
)