import type { Meta, StoryObj } from '@storybook/react-vite';
import styled from 'styled-components';
import IssueCard from './IssueCard';

const meta: Meta<typeof IssueCard> = {
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

type Story = StoryObj<typeof IssueCard>;

export const DefaultIssueCard: Story = {
    args: {
        id: 1,
        title: 'Add dark mode toggle',
        label: 'feature',
    },
};

const Container = styled.div`
    position: relative;
    width: max-content;
`;