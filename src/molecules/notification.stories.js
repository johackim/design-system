import { useState } from 'react';
import Notification from '@molecules/notification';
import Button from '@atoms/button';

export default {
    title: 'Molecules/Notification',
    component: Notification,
};

const Template = (args) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Notification
                {...args}
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            />
            <Button onClick={() => setIsOpen(true)}>Open Notification</Button>
        </>
    );
};

export const Default = Template.bind({});

Default.args = Notification.defaultProps;
