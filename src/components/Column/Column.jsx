import styled from 'styled-components';
import IssueCard from '../IssueCard/IssueCard';

export default function Column({
    title = '',
    issues = []
}){
    return (
        <StyledColumn>
            <StyledHeader>
                <Title>{title}</Title>
                <Count>{issues.length}</Count>
            </StyledHeader>

            {issues.length === 0 ? (
                <EmptyIssue>Nothing here yet.</EmptyIssue>
            ): (
                issues.map((issue) => (
                    <IssueCard 
                        id={issue.id} 
                        title={issue.title} 
                        label={issue.label} 
                    />
                ))
            )}

            <AddIssue>
                + Add issue
            </AddIssue>


        </StyledColumn>
    )
}

const StyledColumn = styled.div`
    display: flex;
    flex-direction: column;
`;

const StyledHeader = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 9px;
`;

const Title = styled.span`
    font-size: 12px;
    color: #9BA0AA;
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 400;
`;

const Count = styled.span`
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 500;
    font-size: 12px;
    color: #9BA0AA;
    background-color: #191C22;
    border: 1px solid #2C313A;
    border-radius: 20px;
    padding: 3px 7px;
`;

const EmptyIssue = styled.p`
    border: 1px dashed #2C313A;
    border-radius: 10px;
    padding: 20px 12px;
    text-align: center;
    font-family: 'IBM Plex Sans', sans-serif;
    color: #9BA0AA;
    font-weight: 400;
    font-size: 14px;
`;

const AddIssue = styled.button`
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 8px 11px;
    border: 1px dashed #3B424D;
    border-radius: 10px;
    color: #9BA0AA;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: 1.65;
    cursor: pointer;
`;
