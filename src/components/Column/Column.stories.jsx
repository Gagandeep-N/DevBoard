import styled from 'styled-components';
import Column from './Column';

const meta = {
    component: Column,
    argTypes: {
        title: { control: 'text' },
        issues: { control: 'array' },
    },
    render: props => {
        return (
            <Container>
                <Column {...props} />
            </Container>
        );
    },
};

export default meta;

export const TodoColumnEmpty = {
    args: {
        title: 'Todo',
        issues: []
    },
};

export const TodoColumn = {
    args: {
        title: 'Todo',
        issues: [
            {
                id: 1,
                title: 'Add dark mode toggle',
                label: 'feature'
            },
            {
                id: 2,
                title: 'Login button misaligned',
                label: 'bug'
            }
        ],
    },
};


const Container = styled.div`
    position: relative;
    width: max-content;
`;