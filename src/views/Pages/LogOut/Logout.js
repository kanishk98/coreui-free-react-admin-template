import React from 'react';
import { Redirect } from 'react-router-dom';

export default class Logout extends React.Component {
    
    async componentWillMount() {
        await window.localStorage.setItem('loggedIn', 'no');
    }

    render() {
        return (
            <Redirect to="/login" />
        );
    }
}