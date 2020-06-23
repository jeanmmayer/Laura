import React from 'react';
import AlertStatus from './AlertStatus';
import AlertLevel from './AlertLevel';
import Button from '../../_components/Button';

const list = [
    {
        'id': 1,
        'med_record': '132',
        'patient_name': 'João Carlos Gonçalves',
        'alert_level': 'red',
        'date': '12/06/19 - 16:17',
        'is_pendent': true,
        'symptoms': [
            {'name': 'Dor de cabeça', 'level': 5},
            {'name': 'Tosse', 'level': 2},
            {'name': 'Dor na coluna', 'level': 3}
        ]
    },
    {
        'id': 2,
        'med_record': '42',
        'patient_name': 'Maria Silva',
        'alert_level': 'yellow',
        'date': '25/06/20 - 13:17',
        'is_pendent': false,
        'symptoms': [
            {'name': 'Dor de cabeça', 'level': 5},
            {'name': 'Tosse', 'level': 2},
            {'name': 'Dor na coluna', 'level': 3}
        ]
    },
    {
        'id': 3,
        'med_record': '002',
        'patient_name': 'Graça Ferreira',
        'alert_level': 'gray',
        'date': '22/06/20 - 17:10',
        'is_pendent': true,
        'symptoms': [
            {'name': 'Tosse', 'level': 1}
        ]
    },
];

const alerts = list.map(function(item, i) {
    return (
        <tr key={item.id} className="list-item">
            <td> {item.med_record} </td>
            <td>
                <strong> {item.patient_name} </strong>
            </td>
            <td> <AlertLevel level={item.alert_level} /> </td>
            <td> {item.date} </td>
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
    )
});

export default _ => {
    return (
        <>
            {alerts}
        </>
    )
}