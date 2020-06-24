import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../_components/Input';
import Button from '../_components/Button';
import LogoLogin from './LogoLogin';
import Card from '../_components/Card';
import './FormLogin.css';

import { userActions } from '../_actions';

export default _ => {

    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    });

    const [submitted, setSubmitted] = useState(false);
    const { email, password } = inputs;
    const loggingIn = useSelector(state => state.authentication.loggingIn);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.logout());
    }, []);

    function handleChange(e) {
        const { name, value } = e.target;
        setInputs(inputs => ({ ...inputs, [name]: value }));
    };

    function handleSubmit(e) {
        e.preventDefault();

        setSubmitted(true);
        if (email && password) {
            dispatch(userActions.login(email, password));
        }
    };

    return (
        <div className="formLogin">
            <Card padding="50px">
                <form name="form" onSubmit={handleSubmit}>
                    <LogoLogin />

                    <Input
                        label="Email"
                        name="email"
                        margin="10px 0"
                        padding="15px"
                        value={email}
                        onChange={handleChange}
                        type="email"
                        placeholder="exemplo@email.com"
                        required
                    />

                    <Input
                        label="Senha"
                        name="password"
                        margin="10px 0 20px 0"
                        padding="15px"
                        value={password}
                        onChange={handleChange}
                        type="password"
                        placeholder="••••••"
                        required
                    />

                    <Button
                        primary={true}
                        upper
                        bold
                        type="submit"
                        loading={loggingIn}
                        onClick={handleSubmit}
                        margin="10px 0"
                        text="Entrar"
                    />
                    <Button
                        primaryNegative
                        noBorder
                        upper
                        bold
                        margin="10px 0"
                        type="button"
                        text="Esqueceu a senha?"
                    />

                </form>
            </Card>
        </div>
    )
}