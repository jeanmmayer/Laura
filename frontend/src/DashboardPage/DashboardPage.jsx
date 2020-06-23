import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../_components/Header';
import Steps from './Steps/Steps';
import Alerts from './Alerts/Alerts';
import { Container } from '../_components/Styles'
import { dashboardActions } from '../_actions';

export default _ => {

    const alerts = useSelector(state => state.alerts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(dashboardActions.getAlerts());
    }, []);

    console.log(alerts);

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