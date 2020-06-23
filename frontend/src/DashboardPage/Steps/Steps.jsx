import React from 'react';
import Card from '../../_components/Card';
import styled from 'styled-components';
import iconStep1 from '../../_assets/steps_icons/iconStep1.png';
import iconStep2 from '../../_assets/steps_icons/iconStep2.png';
import iconStep3 from '../../_assets/steps_icons/iconStep3.png';
import iconStep4 from '../../_assets/steps_icons/iconStep4.png';

const StepsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: stretch;
    margin: 20px 0;
`;

const Icon = styled.img`
    height: 50px;
`;

const Total = styled.span`
    font-size: 40px;
    font-weight: bold;
`;

const StepName = styled.div`
    text-align: right;
    font-weight: bold;
    opacity: .4;
    font-size: 12px;
    margin: 5px 0;
`;

const steps = [
    {
        name: 'Etapa 1',
        icon: iconStep1,
        total: 234
    },
    {
        name: 'Etapa 2',
        icon: iconStep2,
        total: 13
    },
    {
        name: 'Etapa 3',
        icon: iconStep3,
        total: 62
    },
    {
        name: 'Etapa 4',
        icon: iconStep4,
        total: 0
    },
];

const cards = steps.map(function(step, i) {
    return (
        <Card
            key={i}
            padding="20px"
            margin="10px"
            flex="1"
        >
            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
            }}>
                <div>
                    <Icon src={step.icon} />
                </div>
                <Total>
                    {step.total}
                </Total>
            </div>
            <StepName>
                {step.name}
            </StepName>
        </Card>
    )
});

export default _ => {
    return (
        <StepsContainer>

            {cards}

        </StepsContainer>
    );
}
