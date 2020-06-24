import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Input from '../../_components/Input';
import styled from 'styled-components';
import { alertActions } from '../../_actions';

const Td = styled.td`
    background-color: #E3E3E3;
    padding: 5px;
`;

export default _ => {
    const [search, setSearch] = useState('');

    const dispatch = useDispatch();

    function handleChange(e) {
        const value = e.target.value;
        setSearch(value);

        // TODO: Should search this function only after typing stop
        handleSearch(value);

    };

    function handleSearch(value) {
        const params = {
            search: value
        };

        dispatch(alertActions.getAlerts(params));
    };

    return (
        <tr>
            <Td colSpan="7">
                <form onSubmit={handleSearch}>
                    <Input
                        placeholder="Busque por prontuários e nome de pacientes"
                        value={search}
                        onChange={handleChange}
                    />
                </form>
            </Td>
        </tr>
    );
}