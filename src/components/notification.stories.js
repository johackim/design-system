import Notification from '@components/notification';

export default {
    title: 'Components/Notification',
    component: Notification,
};

const Template = (args) => <Notification {...args} />;

export const Default = Template.bind({});

Default.args = {
    ...Notification.defaultProps,
    isOpen: true,
};
