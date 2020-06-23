import React from 'react';
import Header from '../_components/Header';
import Steps from './Steps/Steps';
import Alerts from './Alerts/Alerts';
import { Container } from '../_components/Styles'

export default _ => {
    return (
        <div>
            <Header />
            <Container>
                <Steps />
                <Alerts />
            </Container>
        </div>
    );
}