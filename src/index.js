import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import "./Common/css/index.css";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import "nprogress/nprogress.css"
import "bootstrap/dist/js/bootstrap"

import { Provider } from "react-redux";
import store from "./Store";
//一到app.js里面必须同步store的信息，如果<Provider/>写到app.js,到app.js时就无法同步所有信息
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
    document.getElementById('root'));


