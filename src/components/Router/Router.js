import React from 'react';

import {BrowserRouter, Route, Switch} from "react-router-dom";

import App from '.../App'

const Router = () => {
    render(
        <BrowserRouter>
            <Route path='/' component={App} />

        </BrowserRouter>
    );
}

export default Router;