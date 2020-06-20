import React from 'react'
import styled from 'styled-components'

export default props => {
    let Button = styled.button`
        cursor: pointer;
        font-size: 14px;
        padding: 15px;
        text-align: center;
        letter-spacing: 1px;
        width: 100%;
        border-radius: 30px;
        border: none;

        &:focus {
            outline: none;
        }
    `
    props.primary ? Button = styled(Button)`
        background-color: #0099E9;
        color: #fff;

        &:active {
            background-color: #0a86c7;
        }
        &:disabled {
            background-color: #17afff;
            cursor: not-allowed;
        }
    ` : Button = Button;

    props.primaryNegative ? Button = styled(Button)`
        background: none;
        color: #0099E9;
    ` : Button = Button;

    props.upper ? Button = styled(Button)`
        text-transform: uppercase;
    ` : Button = Button;

    props.bold ? Button = styled(Button)`
        font-weight: bold;
    ` : Button = Button;

    if(props.padding) {
        Button = styled(Button)`
            padding: ${ props.padding };
        `;
    }

    if(props.margin) {
        Button = styled(Button)`
            margin: ${ props.margin };
        `;
    }

    return (
        <Button type={props.type} onClick={props.onClick}>
            { props.text }
        </Button>
    )
}