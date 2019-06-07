import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch, BrowserRouter as Router, Link, IndexRoute } from 'react-router-dom';

// Styles
// Import Flag Icons Set
import 'flag-icon-css/css/flag-icon.min.css';
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';
// Import Main styles for this application
import '../scss/style.scss'
// Temp fix for reactstrap
import '../scss/core/_dropdown-menu-right.scss'
import { PersistGate } from 'redux-persist/integration/react'

import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import reducers from './allreducers';
// import ReduxThunk from 'redux-thunk';
// import logger from 'redux-logger'



import configureStore from './configureStore'

// Containers
import Full from './containers/Full/';
import Login from '../src/views/Authentication/Login/NewLogIn';
import PasswordRecoveryMobileNo from './views/Authentication/Login/PasswordRecoveryMobileNo';
import PasswordRecoveryOTP from './views/Authentication/Login/PasswordRecoveryOTP';
import CreateNewPassword from '../src/views/Authentication/Login/CreateNewPassword';
import PasswordCreatedSuccess from '../src/views/Authentication/Login/PasswordCreatedSuccess';


import Disclaimer from '../../ui/src/views/BankManagement/MoneyTransfer/AllChildComponents/Disclaimer';

const { persistor, store } = configureStore();

//const store = createStore(reducers, {}, applyMiddleware(ReduxThunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <HashRouter >
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/PasswordRecoveryMobileNo' component={PasswordRecoveryMobileNo} />
          <Route exact path='/PasswordRecoveryOTP' component={PasswordRecoveryOTP} />
          <Route exact path='/CreateNewPassword' component={CreateNewPassword} />
          <Route exact path='/PasswordCreatedSuccess' component={PasswordCreatedSuccess} />
          <Route exact path='/Disclaimer' component={Disclaimer} />
          <Full />
          {/* <PrintStatementOnMTansfer />
          <Disclaimer /> */}
        </Switch>
      </HashRouter>
    </PersistGate>
  </Provider>, document.getElementById('root'));
