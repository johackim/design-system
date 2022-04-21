import Progress from '@components/progress';

export default {
    title: 'Components/Progress',
    component: Progress,
};

const Template = (args) => (
    <>
        <Progress {...args} />
        <div style={{ height: 2000 }}>Content</div>
    </>
);

export const Default = Template.bind({});

Default.args = Progress.defaultProps;
