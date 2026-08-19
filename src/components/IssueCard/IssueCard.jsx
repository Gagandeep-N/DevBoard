import { useState } from 'react';
import styled from 'styled-components';

export default function IssueCard({
    id = 1,
    title = '',
    label = ''
}) {

    const [isSelected, setSelected] = useState(false);
    let colorBG = '';
    let color = ''

    if(label === 'feature') {
        colorBG = "#1F6FB2"
        color = '#8DBEE8'
    }else if(label === 'bug'){
        colorBG = "#C4362E"
        color = '#F0938C'
    }else{
        colorBG = "#5F636B"
        color = "#A8ADB6"
    }


    const handleOnClick = () => {
        setSelected((prev) => !prev);
    }

    return(
        <StyledIssueCard $isSelected={isSelected} onClick={handleOnClick}>
            <Title>
                {title}
            </Title>

            <LabelHolder>
                <Label $labelBG={colorBG} $color={color}>{label}</Label>
            </LabelHolder>

        </StyledIssueCard>
    )
}

const StyledIssueCard = styled.div`
    width: 357px;
    background-color: #191C22;
    border: 1px solid;
    border-color: ${({ $isSelected }) => $isSelected ? '#5A4FE0' : '#2C313A'};
    border-radius: 10px;
    padding: 9px 11px;
    margin-bottom: 7px;
`;

const Title = styled.p`
    color: #E8E9EC;
    font-size: 14px;
    font-family: 'IBM Plex Sans', sans-serif;
    margin: 0 0 8px;
    line-height: 1.45;
`;

const LabelHolder = styled.div`
    font-size: 12px;
    display: flex;
    align-items: center;
    gap: 6px;
`;

const Label = styled.span`
    background-color: ${({ $labelBG }) => $labelBG};
    color: ${( {$color} ) => $color};
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 600;
    font-size: 10px;
    padding: 3px 7px;
    border-radius: 20px;
    white-space: nowrap;
`;