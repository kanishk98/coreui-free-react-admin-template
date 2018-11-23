import React from 'react';
import { AppSwitch } from '@coreui/react';

export default class CustomSwitch extends React.Component {

    onToggle = ({item}) => {
        console.log(item.s);
        // implement API calls and saving browser details here
    }

    render() {
        const { switches } = this.props;
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
                        }} />
                    </td>
                    <td>
                        {s.info}
                    </td>
                </>
            )));
    }
}