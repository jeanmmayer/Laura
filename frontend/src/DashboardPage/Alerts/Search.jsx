import React from 'react';
import Input from '../../_components/Input';
import styled from 'styled-components';

const Td = styled.td`
    background-color: #E3E3E3;
    padding: 5px;
`;

export default _ => {
    return (
        <tr>
            <Td colSpan="7">
                <Input
                    placeholder="Busque por prontuários, nomes, níveis de altera ou status"
                />
            </Td>
        </tr>
    );
}