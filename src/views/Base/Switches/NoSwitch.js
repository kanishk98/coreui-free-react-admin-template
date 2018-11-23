import React from 'react';

export default class NoSwitch extends React.Component {

    render() {
        const {switches} = this.props;
        return (
            switches.map(s => (
                <>
                    <td>
                        {s.title}
                    </td>
                    <td>
                        {s.info}
                    </td>
                </>
            )));
    }
}