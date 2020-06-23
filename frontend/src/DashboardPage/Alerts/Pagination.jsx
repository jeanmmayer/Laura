import React from 'react';
import Button from '../../_components/Button';
import styled from 'styled-components';

const Td = styled.td`
    padding: 15px 0;
    font-size: 13px;
    border-top: 1px solid #E3E3E3;
`;

const Select = styled.select`
    padding: 10px;
    border: none;
    border-bottom: 1px solid black;
`;

export default _ => {
    return (
        <tr>
            <Td colSpan="5"> </Td>
            <Td>
                Linhas por página:
                <Select>
                    <option>
                        5
                    </option>
                    <option>
                        10
                    </option>
                    <option>
                        15
                    </option>
                    <option>
                        20
                    </option>
                </Select>
            </Td>

            <Td>
                <Button
                    primaryNegative
                    pagination
                    text="<"
                    padding="5px"
                />
                <strong>1 - 5</strong> de 50
                <Button
                    primaryNegative
                    pagination
                    text=">"
                    padding="5px"
                />
            </Td>
        </tr>
    )
}