import React from 'react';
import styled from 'styled-components';

const Generic = styled.div`
    border-radius: 3px;
    font-weight: bold;
    text-align: center;
`;

const Red = styled(Generic)`
    border: 1px solid #EE4058;
    background-color: #FFCCD3;
    color: #EE4058;
`;

const Yellow = styled(Generic)`
    border: 1px solid #ba9800;
    background-color: #FFF7D5;
    color: #ba9800;
`;

const Blue = styled(Generic)`
    border: 1px solid #487AB0;
    background-color: #CCE5FF;
    color: #487AB0;
`;

const Gray = styled(Generic)`
    border: 1px solid #383D41;
    background-color: #E2E3E5;
    color: #383D41;
`;

export default props => {

    switch(props.level) {
        case 'gray':
            return (
                <Gray> cinza </Gray>
            )
        case 'blue':
            return (
                <Blue> azul </Blue>
            )
        case 'yellow':
            return (
                <Yellow> amarelo </Yellow>
            )
        case 'red':
            return (
                <Red> vermelho </Red>
            )
        default:
            return (
                <div> indefinido </div>
            )
    }
}