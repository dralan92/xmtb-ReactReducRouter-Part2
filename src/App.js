import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store'
import Home from './components/Home';
import Register from './components/Register';
import Listing from './components/Listing';
import Login from './components/Login';
import Profile from './components/Profile';
import Error from './components/Error';
import Navigation from './components/Navigation';



class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <BrowserRouter >
        <div>
          <Navigation />
            <Switch>
              <Route path ='/login' component={Login} />
              <Route path ='/' component={Home} exact />
              <Route path ='/register' component={Register} />
              <Route path ='/profile' component={Profile} />
              <Route path ='/listing' component={Listing} />
              <Route component={Error} />
            </Switch>
        </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
