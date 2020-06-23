import React from 'react';
import styled from 'styled-components';
import './Input.css';


let Input = styled.input`
    border-radius: 5px;
    border: 1px solid #ebe9e6;
    padding: 15px;
    margin-top: 8px;
    padding: ${props => props.padding}
`;

let Container = styled.div`
    margin: 15px 0;
`;

export default props => {
    return (
        <Container>
            <label>
                { props.label }
            </label>
            <Input
                type={props.type}
                onChange={props.onChange}
                value={props.value}
                name={props.name}
                placeholder={props.placeholder}
                required={props.required}
            />
        </Container>
    )
}