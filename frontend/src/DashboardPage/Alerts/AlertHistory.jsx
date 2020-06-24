
import React, { useState } from 'react';
import Modal from 'react-modal';
import Button from '../../_components/Button';
import moment from 'moment';
import './AlertHistory.css';

function generateSymptoms(list) {
    let content;

    if(list && list.length > 0) {
        content = list.map(function(item, i) {
            return (
                <tr key={item.id}>
                    <td> { item.symptom.name } </td>
                    <td> { item.symptom.level } </td>
                </tr>
            );
        });
    } else {
        content = <tr><td colSpan="2">Não há sintomas</td></tr>
    }

    return content;
};

function generateHistory(list) {
    let content;

    if(list && list.length > 0) {
        content = list.map(function(item, i) {
            return (
                <li key={item.id}>
                    {moment(item.created_at).format("DD/MM/YY HH:mm")} - { item.text }
                </li>
            );
        });
    } else {
        content = <li>Não há histórico de evolução.</li>
    }

    return content;
};

export default props => {

    const [modalHistoryIsOpen, setHistoryIsOpen] = useState(false);
    const modalStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '800px',
            margin: 'auto',
            resize: 'none',
            maxHeight: '80vh',
            overflow: 'auto'
        }
    };

    function openHistoryModal() {
        setHistoryIsOpen(true);
    };

    function closeModal() {
        setHistoryIsOpen(false);
    };

    const symptoms = generateSymptoms(props.symptoms);
    const history = generateHistory(props.history);

    return (
        <div>
            <Button
                primary
                upper
                bold
                onClick={openHistoryModal}
                text="Resumo do alerta"
                padding="8px"
            />
            <Modal
                isOpen={modalHistoryIsOpen}
                onRequestClose={closeModal}
                style={modalStyles}
            >
                <div className="container">
                    <div>

                        <h4>
                            Sintomas
                        </h4>
                        <table>
                            <thead>
                                <tr>
                                    <td> Sintoma </td>
                                    <td> Intensidade </td>
                                </tr>
                            </thead>
                            <tbody>
                                { symptoms }
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <h4>
                            Histórico
                        </h4>
                        <ul>
                            { history }
                        </ul>
                    </div>
                </div>

            </Modal>
        </div>
    );
}