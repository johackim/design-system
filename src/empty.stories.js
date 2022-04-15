import Empty from '@components/empty';

export default {
    title: 'Components/Empty',
    component: Empty,
};

const Template = (args) => <Empty {...args} />;

export const Default = Template.bind({});

Default.args = Empty.defaultProps;
