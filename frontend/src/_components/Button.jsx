import React from 'react';
import styled, { css } from 'styled-components';

let Button = styled.button`
    cursor: pointer;
    font-size: 11px;
    padding: 15px;
    text-align: center;
    width: 100%;
    border-radius: 30px;
    border: none;

    &:focus {
        outline: none;
    }

    margin: ${props => props.margin};
    padding: ${props => props.padding};

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
        border: 1px solid #0099E9;

        &:active {
            background-color: #F7F6F4;
        }

        &:disabled {
            color: #F7F6F4;
            cursor: not-allowed;
        }
    `}

    ${props => props.pagination && css`
        font-size: 16px;
        font-weight: bold;
        width: 30px;
        border-radius: 100%;
        margin: 0 5px;

        &:active {
            background-color: #F7F6F4;
        }

        &:disabled {
            color: #F7F6F4;
            cursor: not-allowed;
        }
    `}

    ${props => props.upper && css`
        text-transform: uppercase;
    `}

    ${props => props.bold && css`
        font-weight: bold;
    `}

    ${props => props.noBorder && css`
        border: 0 !important;
    `}

`;

export default props => {
    return (
        <Button
            type={props.type}
            onClick={props.onClick}
            primary={props.primary}
            pagination={props.pagination}
            noBorder={props.noBorder}
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