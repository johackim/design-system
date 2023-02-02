import Progress from '@atoms/progress';

export default {
    title: 'Atoms/Progress',
    component: Progress,
};

const Template = (args) => (
    <>
        <Progress {...args} />
        <div style={{ height: 2000 }}>Scroll down to see the progress bar</div>
    </>
);

export const Default = Template.bind({});

Default.args = Progress.defaultProps;
