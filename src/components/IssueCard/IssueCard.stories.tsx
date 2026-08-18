import styled from 'styled-components';
import IssueCard from './IssueCard';

const meta = {
    component: IssueCard,
    argTypes: {
        id: { control: 'number' },
        title: { control: 'text' },
        label: { control: 'text' },
    },
    render: props => {
        return (
            <Container>
                <IssueCard {...props} />
            </Container>
        );
    },
};

export default meta;

export const FeatureIssueCard = {
    args: {
        id: 1,
        title: 'Add dark mode toggle',
        label: 'feature',
    },
};

export const BugIssueCard = {
    args: {
        id: 1,
        title: 'Add dark mode toggle',
        label: 'bug',
    },
};

export const ChoreIssueCard = {
    args: {
        id: 1,
        title: 'Add dark mode toggle',
        label: 'chore',
    },
};

const Container = styled.div`
    position: relative;
    width: max-content;
`;