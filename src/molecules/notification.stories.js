import Notification from '@molecules/notification';

export default {
    title: 'Molecules/Notification',
    component: Notification,
};

const Template = (args) => <Notification {...args} />;

export const Default = Template.bind({});

Default.args = Notification.defaultProps;
