import React, { Component, lazy, Suspense } from 'react';
import DefaultHeader from '../../containers/DefaultLayout/DefaultHeader';
import { AppHeader } from '@coreui/react';
import Switches from '../Base/Switches/Switches';

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
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
