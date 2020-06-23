import React from 'react';
import styled from 'styled-components';

let Card = styled.div`
    border-radius: 5px;
    border: none;
    background-color: white;
    box-shadow: 0 0 5px #ebe9e6;
`

export default props => {

    return (
        <Card style={{
            padding: props.padding,
            margin: props.margin,
            flex: props.flex
        }}>
            { props.children }
        </Card>
    )
}