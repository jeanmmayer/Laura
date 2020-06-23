import React from 'react';
import styled, { css } from 'styled-components';

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

    ${props => props.primary && css`
        background-color: #0099E9;
        color: #fff;

        &:active {
            background-color: #0a86c7;
        }
        &:disabled {
            background-color: #17afff;
            cursor: not-allowed;
        }
    `}

    ${props => props.primaryNegative && css`
        background: none;
        color: #0099E9;
    `}

    ${props => props.upper && css`
        text-transform: uppercase;
    `}

    ${props => props.bold && css`
        font-weight: bold;
    `}

`;

export default props => {
    return (
        <Button
            type={props.type}
            onClick={props.onClick}
            primary={props.primary}
            upper={props.upper}
            bold={props.bold}
            margin={props.margin}
            padding={props.padding}
            primaryNegative={props.primaryNegative}
            styles={{
                margin: props.margin,
                padding: props.padding
            }}
        >
            { props.text }
        </Button>
    )
}