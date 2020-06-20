import React from 'react';
import styled from 'styled-components';
import './input.css';

export default props => {

    let Input = styled.input`
        border-radius: 5px;
        border: 1px solid #ebe9e6;
        padding: 15px;
        margin-top: 8px;
    `

    let Div = styled.div`
        margin: 15px 0;
    `

    if(props.required) {
        Input = styled(Input)`
            padding: ${ props.padding };
        `;
    }

    return (
        <Div>
            <label>
                { props.label }
            </label>
            <Input
                type={props.type}
                onChange={props.onChange}
                value={props.value}
                placeholder={props.placeholder}
                required={props.required}
            />
        </Div>
    )
}