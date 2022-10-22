import Badge from '@components/badge';

export default {
    title: 'Components/Badge',
    component: Badge,
};

const Template = (args) => <Badge {...args} />;

export const Default = Template.bind({});

Default.args = Badge.defaultProps;
