import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AlertStatus from './AlertStatus';
import AlertLevel from './AlertLevel';
import Button from '../../_components/Button';
import { dashboardActions } from '../../_actions';

// const list = [
//     {
//         'id': 1,
//         'med_record': '132',
//         'patient_name': 'João Carlos Gonçalves',
//         'alert_level': 'red',
//         'date': '12/06/19 - 16:17',
//         'is_pendent': true,
//         'symptoms': [
//             {'name': 'Dor de cabeça', 'level': 5},
//             {'name': 'Tosse', 'level': 2},
//             {'name': 'Dor na coluna', 'level': 3}
//         ]
//     },
//     {
//         'id': 2,
//         'med_record': '42',
//         'patient_name': 'Maria Silva',
//         'alert_level': 'yellow',
//         'date': '25/06/20 - 13:17',
//         'is_pendent': false,
//         'symptoms': [
//             {'name': 'Dor de cabeça', 'level': 5},
//             {'name': 'Tosse', 'level': 2},
//             {'name': 'Dor na coluna', 'level': 3}
//         ]
//     },

// ];

export default _ => {
    const alerts = useSelector(state => state.dashboard.alerts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(dashboardActions.getAlerts());
    }, []);

    console.log(alerts);

    return (
        <>
            {alerts.map(item => (
                <tr key={item.id} className="list-item">
                    <td> {item.patient.med_record} </td>
                    <td>
                        <strong> {item.patient.name} </strong>
                    </td>
                    <td> <AlertLevel level={item.alert_level} /> </td>
                    <td> {item.created_at} </td>
                    <td> <AlertStatus is_pendent={item.is_pendent} /> </td>
                    <td>
                        <Button
                            primaryNegative
                            upper
                            bold
                            text="Registrar evolução"
                            padding="8px"
                        />
                    </td>
                    <td>
                        <Button
                            primary
                            upper
                            bold
                            text="Resumo do alerta"
                            padding="8px"
                        />
                    </td>
                </tr>
            ))}
        </>
    )
}