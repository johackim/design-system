import Badge from '@atoms/badge';

export default {
    title: 'Atoms/Badge',
    component: Badge,
};

const Template = (args) => <Badge {...args} />;

export const Default = Template.bind({});

Default.args = Badge.defaultProps;
