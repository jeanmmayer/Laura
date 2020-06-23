import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.header`
    border-radius: 5px;
    border: none;
    background-color: white;
    box-shadow: 0 0 5px #ebe9e6;
`;

export default _ => {
    return (
        <Header>
            <Link to="/login">Logout</Link>
        </Header>
    );
}