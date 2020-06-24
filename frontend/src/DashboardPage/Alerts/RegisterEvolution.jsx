
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';
import Button from '../../_components/Button';
import Input from '../../_components/Input';
import { alertActions } from '../../_actions';

export default props => {

    const dispatch = useDispatch();
    const savingHistory = useSelector(state => state.alert.savingHistory);

    const [modalEvolutionIsOpen, setEvolutionIsOpen] = useState(false);
    const [modalText, setModalText] = useState('');

    function openEvolutionModal() {
        setEvolutionIsOpen(true);
    };

    function handleSubmit(e) {
        e.preventDefault();

        if (props.alert_id && modalText) {
            dispatch(alertActions.storeEvolution(props.alert_id, modalText));
        }
    };

    function closeModal() {
        setEvolutionIsOpen(false);
    };

    function handleChange(e) {
        setModalText(e.target.value);
    };

    const modalStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '400px',
            margin: 'auto',
            resize: 'none'
        }
    };

    return (
        <>
            <Button
                primaryNegative
                upper
                bold
                text="Registrar evolução"
                onClick={openEvolutionModal}
                padding="8px"
            />
            <Modal
                isOpen={modalEvolutionIsOpen}
                onRequestClose={closeModal}
                style={modalStyles}
            >
                <form name="formEvolution" onSubmit={handleSubmit}>
                    <Input
                        type="textarea"
                        rows="10"
                        label="Descritivo da evolução:"
                        value={modalText}
                        onChange={handleChange}
                    />
                    <Button
                        primary={true}
                        upper
                        bold
                        loading={savingHistory}
                        onClick={handleSubmit}
                        margin="10px 0"
                        type="submit"
                        text="Registrar"
                    />
                    <Button
                        primaryNegative
                        noBorder
                        upper
                        bold
                        onClick={closeModal}
                        margin="10px 0"
                        type="button"
                        text="Cancelar"
                    />
                </form>
            </Modal>
        </>
    )
}