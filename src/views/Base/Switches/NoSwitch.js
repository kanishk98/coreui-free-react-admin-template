import React from 'react';
import {Button} from 'reactstrap';
import Constants from '../../../Constants';

const axios = require('axios');

export default class NoSwitch extends React.Component {

    constructor(props) {
        super(props);
        this.state = props;
    }

    _onClickDelete = ({s}) => {
        if (window.confirm("Are you sure you want to delete this bus?")) {
            const url = 'http://' + Constants.collectionsIp + '/delete-bus';
            console.log(url);
            axios({
                url: url, 
                method: 'post',
                data: s,
            })
            .then(res => {
                console.log(res);
                // deleting item from list
                let switches = this.state.switches;
                switches.splice(switches.indexOf(s), 1);
                this.setState({switches: switches})
            })
            .catch(err => console.log(err));
        }
    }

    render() {
        const {switches} = this.state;
        console.log(switches);

        return (
            switches.map(s => (
                <thead>
                    <td>
                        {s.title}
                    </td>
                    <td>
                        {s.info}
                    </td>
                    <td>
                        {'Rs. ' + s.price}
                    </td>
                    <td>
                        <Button color="primary" type="button" onClick={({s})=>this._onClickDelete({s})}>Delete bus</Button>
                    </td>
                </thead>
            )));
    }
}