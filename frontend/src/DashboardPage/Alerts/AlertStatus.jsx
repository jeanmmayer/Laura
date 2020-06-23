import React from 'react';
import styled from 'styled-components';

const Pendent = styled.div`
    color: #FFA822;
`;

const NotPendent = styled.div`
    color: #26830C;
`;

export default props => {

    if(props.is_pendent) {
        return (
            <Pendent> Pendente </Pendent>
        )
    } else {
        return (
            <NotPendent> Realizado </NotPendent>
        )
    }
}