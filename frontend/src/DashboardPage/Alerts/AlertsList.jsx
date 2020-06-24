import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AlertStatus from './AlertStatus';
import AlertLevel from './AlertLevel';
import ButtonsActions from './ButtonsActions';
import { alertActions } from '../../_actions';
import moment from 'moment';

export default _ => {
    const alerts = useSelector(state => state.alert.alerts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(alertActions.getAlerts());
    }, []);

    return (
        <>
            {alerts.map(item => (
                <tr key={item.id} className="list-item">
                    <td> {item.patient.med_record} </td>
                    <td>
                        <strong> {item.patient.name} </strong>
                    </td>
                    <td> <AlertLevel level={item.alert_level} /> </td>
                    <td> {moment(item.created_at).format("DD/MM/YY - HH:mm")} </td>
                    <td> <AlertStatus is_pendent={item.is_pendent} /> </td>
                    <ButtonsActions alert_id={item.id} />
                </tr>
            ))}
        </>
    )
}