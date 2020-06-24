import React from 'react';
import Modal from 'react-modal';
import RegisterEvolution from './RegisterEvolution';
import AlertHistory from './AlertHistory';

export default props => {
    Modal.setAppElement('#app');

    return (
        <>
            <td>
                <RegisterEvolution alert_id={props.alert_id} />
            </td>
            <td>
                <AlertHistory
                    history={props.history}
                    symptoms={props.symptoms}
                />
            </td>
        </>
    )
}
