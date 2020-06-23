import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../_assets/img/logo_orange_bg.png';
import ExitIcon from '../_assets/img/exit_icon.png';

const Header = styled.header`
    border: none;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #FF881F;
    padding: 0 40px;
`;

const LogoEl = styled.img`
    height: 40px;
`;

const ExitIconEl = styled.img`
    height: 30px;
    margin-right: 5px;
`;

export default _ => {
    return (
        <Header>
            <div>
                <LogoEl src={Logo} />
            </div>
            <div>
                <Link
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: '#F9E0C9',
                        textDecoration: 'none'
                    }}
                    to="/login"
                >
                    <ExitIconEl src={ ExitIcon } /> Sair
                </Link>
            </div>
        </Header>
    );
}