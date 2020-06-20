import React from 'react';
import styled from 'styled-components';

export default props => {
    let Card = styled.div`
        border-radius: 5px;
        border: none;
        background-color: white;
        box-shadow: 0 0 5px #ebe9e6;
    `

    if(props.padding) {
        Card = styled(Card)`
            padding: ${ props.padding };
        `;
    }

    return (
        <Card>
            { props.children }
        </Card>
    )
}