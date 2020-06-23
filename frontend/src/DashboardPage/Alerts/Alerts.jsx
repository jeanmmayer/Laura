import React from 'react';
import styled from 'styled-components';
import Search from './Search';
import AlertsList from './AlertsList';
import Pagination from './Pagination';
import Card from '../../_components/Card';


const Table = styled.table`
    width: 100%;
    border-radius: 5px;
    border-spacing: 0;
    font-size: 14px;

    & > thead > tr > td {
        padding: 15px 10px;
        font-size: 14px;
        font-weight: bold;
        border-bottom 1px solid #222;
    }

    & > thead > tr {
        box-shadow: 0 0 0 1px #222;
        border-radius: 5px 5px 0 0;
    }

    & > tbody > .list-item > td {
        padding: 15px 10px;
    }

    & .list-item:nth-child(odd) {
        background-color: #F7F6F4;
    }
`;

export default _ => {
    return (
        <Card margin="10px">
            <Table>
                <thead>
                    <tr>
                        <td>
                            Prontuário
                        </td>
                        <td>
                            Nome do paciente
                        </td>
                        <td>
                            Nível do alerta
                        </td>
                        <td>
                            Data do alerta
                        </td>
                        <td>
                            Atendimento
                        </td>
                        <td>
                            {/* Button Registrar evolução */}
                        </td>
                        <td>
                            {/* Button resumo do alerta */}
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <Search />
                    <AlertsList />
                </tbody>
                <tfoot>
                    <Pagination />
                </tfoot>
            </Table>
        </Card>
    );
}