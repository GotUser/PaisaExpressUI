
import React, { Component } from 'react';

import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch, BrowserRouter as Router, Link, IndexRoute } from 'react-router-dom';
import configureStore from '../configureStore';

const { persistor, store } = configureStore();
import axios from 'axios';

import { connect } from 'react-redux';


// let unsubscribe = store.subscribe(function () {
//     const state = store.getState();
//     console.log(state);
// })

export function Interceptor(AccessToken) {

    console.log(" @  @  @    @  @  @    @  @  @    @  @  @     @  @  @  LoginDetails added In  Heade4r IN InterCeptor Axios. AccessToken is :  :");

    console.log(AccessToken);

    axios.interceptors.request.use(function (config) {

        const AuthStr = 'Bearer '.concat(AccessToken);
        config.headers.interceptordata = 'Testing Interceptor';

        // if (AuthStr.length > 10) {
            config.headers.Authorization = AuthStr
        // } else null;
        config.headers.interceptordata = 'Testing Interceptor';

        console.log("config From AxiosInterceptor Class ");
        console.log(config);
        return config;
    }, function (error) {
        // console.log("error" + error);
        // Do something with request error
        return Promise.reject(error);
    });
}

// store.subscribe(Interceptor)

class axiosInterceptor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Errors: {},
            date: '',
        }
    }

    render() {
        return null;
    }
}

const mapStateToProps = ({ Authentication }) => {
    const { LoginDetails } = Authentication;

    return { LoginDetails };

};

export default connect(mapStateToProps, {


})(axiosInterceptor);










