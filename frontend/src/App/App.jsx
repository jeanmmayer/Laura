import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

import { history } from '../_helpers';
import { PrivateRoute } from '../_components';
import DashboardPage from '../DashboardPage/DashboardPage';
import LoginPage from '../LoginPage/LoginPage';

import './App.css';

function App() {
    return (
        <div>
            <Router history={history}>
                <Switch>
                    <PrivateRoute exact path="/dashboard" component={DashboardPage} />
                    <Route path="/login" component={LoginPage} />
                    <Redirect from="*" to="/dashboard" />
                </Switch>
            </Router>
        </div>
    );
}

export { App };