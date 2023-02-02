import Empty from '@molecules/empty';

export default {
    title: 'Molecules/Empty',
    component: Empty,
};

const Template = (args) => <Empty {...args} />;

export const Default = Template.bind({});

Default.args = Empty.defaultProps;
