import React from 'react';
import Forms from '../../Base/Forms/Forms';
import DefaultHeader from '../../../containers/DefaultLayout/DefaultHeader';
import { Redirect } from 'react-router-dom';
import { AppHeader } from '@coreui/react';
import App from '../../../App';

class NewBus extends React.Component {

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
            this.setState({loggedIn: false});
        }
    }

    render() {
        if (!this.state.loggedIn) {
            return (
                <Redirect to="/login" />
            );
        }
        return (
            <div className="animated fade-in">
            <AppHeader>
                <DefaultHeader />
            </AppHeader>
            <Forms />
            </div>
        );
    }
}

export default NewBus;