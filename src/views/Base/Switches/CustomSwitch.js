import React from 'react';
import { AppSwitch } from '@coreui/react';
import Constants from '../../../Constants';

export default class CustomSwitch extends React.Component {

    constructor(props) {
        super(props);
        this.state = props;
    }

    onToggle = ({item}) => {
        // implement API calls and saving browser details here
        const url = 'http://' + Constants.collectionsIp + '/add-bus';
        fetch(url, {
            'method': 'POST',
            'body': item
        })
        .then(async (resolve) => {
            console.log(await resolve.json());
            const common_buses = require('../../../assets/common_buses');
            common_buses.map(bus => {
                if(bus.key == item.s.key) {
                    bus.checked = !bus.checked;
                    item.s.checked = !item.s.checked;
                }
            });
        })
        .catch(error => {
            console.log(error);
        })
    }

    render() {
        const { switches } = this.state;
        return (
            switches.map(s => (
                <>
                    <td>
                        {s.title}
                    </td>
                    <td>
                        <AppSwitch className={'mx-1'} variant={'3d'} color={'primary'} size={'lg'} onClick={(item) => {
                            item.s = s;
                            this.onToggle({item});
                        }} checked={s.checked} />
                    </td>
                    <td>
                        {s.info}
                    </td>
                </>
            )));
    }
}