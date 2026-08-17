import styled from 'styled-components';

export default function({
    id = 1,
    title = '',
    label = ''
}) {
    return(
        <StyledIssueCard>
            <Title>
                {title}
            </Title>

            <LabelHolder>
                <Label>{label}</Label>
            </LabelHolder>

        </StyledIssueCard>
    )
}

const StyledIssueCard = styled.div`
    width: 357px;
    background-color: #191C22;
    border: 1px solid #2C313A;
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
    background-color: #1F6FB2;
    color: #8DBEE8;
    font-weight: 600;
    font-size: 10px;
    padding: 3px 7px;
    border-radius: 20px;
    white-space: nowrap;
`;