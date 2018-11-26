import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import firebase from 'firebase';

// Pages
import { Login, Page404, Page500, Register } from './views/Pages';
import Dashboard from './views/Dashboard/Dashboard';
import NewBus from './views/Pages/NewBus/NewBus';
import Logout from './views/Pages/LogOut/Logout';

// Constants file
import Constants from './Constants';

firebase.initializeApp(Constants.firebaseConfig);

class App extends Component {

  static async isLoggedIn() {
    let loggedIn = await window.localStorage.getItem('loggedIn');
    console.log(loggedIn);
    return loggedIn;
  }

  static postNewBus(url, newBus) {
    fetch(url, {
      method: 'POST',
      mode: 'cors',
      body: newBus,
    }).then(res => {
      console.log(res);
      debugger
      return true;
    })
    .catch(err => {
      console.log(err);
      debugger
      return false;
    });
  }

  componentDidMount() {
    document.title = 'Nucleus Transport portal';
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" name="Login Page" component={Login} />
          <Route exact path="/404" name="Page 404" component={Page404} />
          <Route exact path="/500" name="Page 500" component={Page500} />
          <Route exact path="/new-bus" name="New Bus" component={NewBus} />
          <Route exact path="/sign-out" name="Signing out" component={Logout} />
          <Route path="/" name="Home" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
