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

function defineLevel(symptoms) {
    if(symptoms) {
        let level = '';
        let highest = 0;

        symptoms.map(function(symptom, i) {
            if(symptom.symptom.level > highest) {
                highest = symptom.symptom.level;
            }
        });

        if(highest == 0) {
            return 'gray';
        } else if (highest == 1) {
            return 'blue';
        } else if (highest == 2 || highest == 3) {
            return 'yellow';
        } else {
            return 'red';
        }

    }
}

export default props => {

    let level = defineLevel(props.data);

    switch(level) {
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