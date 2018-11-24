import React, { Component, lazy, Suspense } from 'react';
import DefaultHeader from '../../containers/DefaultLayout/DefaultHeader';
import { AppHeader } from '@coreui/react';
import { Redirect } from 'react-router-dom';
import App from '../../App';
import Switches from '../Base/Switches/Switches';

class Dashboard extends Component {
  
  constructor(props) {
    super(props);
    // optimistically assume that the user is logged in
    this.state = {
      loggedIn: true,
    }
  }

  async componentWillMount() {
    const isLoggedIn = await App.isLoggedIn();
    if (isLoggedIn != 'yes') {
      this.setState({ loggedIn: false });
    }
  }

  render() {
    console.log(this.state);
    if (!this.state.loggedIn) {
      return (
        <Redirect to="/login" />
      );
    }
    return (
      <div className="animated fadeIn">
        <AppHeader>
          <DefaultHeader />
        </AppHeader>
        <Switches />
      </div>
    )
  }
}

export default Dashboard;

const styles = {
  table: {
    width: 100,
  }
}
