import React from 'react';
import Input from '../common/input'
import ButtonsLogin from './buttonsLogin'
import LogoLogin from './logoLogin'
import Card from '../common/card'
import './formLogin.css'

export default _ => {
    return (
        <div className="formLogin">
            <Card padding="50px">
                <form>
                    <LogoLogin />
                    <Input
                        label="Email"
                        type="email"
                        placeholder="exemplo@email.com"
                        required
                    />
                    <Input
                        label="Senha"
                        type="password"
                        placeholder="••••••"
                        required
                    />

                    <ButtonsLogin />
                </form>
            </Card>
        </div>
    )
}