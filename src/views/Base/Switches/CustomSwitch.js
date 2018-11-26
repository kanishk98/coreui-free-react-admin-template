import React from 'react';
import { AppSwitch } from '@coreui/react';
import Constants from '../../../Constants';

export default class CustomSwitch extends React.Component {

    constructor(props) {
        super(props);
        this.state = props;
    }

    onToggle = ({ item }) => {
        item.s.checked = !item.s.checked;
        // update always required
        let url = null;
        if (this.props.type == 'common') {
            url = 'http://' + Constants.collectionsIp + '/update-common-bus';
        } else {
            url = 'http://' + Constants.collectionsIp + '/update-bus';
        }
        fetch(url, {
            method: 'POST',
            mode: 'no-cors',
            body: item,
        })
            .then(async (res) => {
                console.log(res);
                // after updating, add/delete bus depending on change
                if (item.s.checked) {
                    // new bus added
                    url = 'http://' + Constants.collectionsIp + '/add-bus';
                } else {
                    url = 'http://' + Constants.collectionsIp + '/delete-bus';
                }
                fetch(url, {
                    method: 'POST',
                    body: item,
                })
                    .then(res => {
                        console.log(res);
                    })
                    .catch(err => {
                        console.log(err);
                    });
            })
            .catch(err => {
                console.log(err);
            });
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
                            this.onToggle({ item });
                        }} checked={s.checked} />
                    </td>
                    <td>
                        {s.info}
                    </td>
                </>
            )));
    }
}