import React from 'react';
import Forms from '../../Base/Forms/Forms';
import DefaultHeader from '../../../containers/DefaultLayout/DefaultHeader';
import { AppHeader } from '@coreui/react';

class NewBus extends React.Component {
    render() {
        return (
            <div classname="animated fade-in">
            <AppHeader>
                <DefaultHeader />
            </AppHeader>
            <Forms />
            </div>
        );
    }
}

export default NewBus;