import { useState } from 'react';
import Modal from '@organisms/modal';
import Button from '@atoms/button';

export default {
    title: 'Organisms/Modal',
    component: Modal,
};

const Template = (args) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Modal
                {...args}
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                buttons={[
                    <Button key="cancel" onClick={() => setIsOpen(false)} secondary>Cancel</Button>,
                    <Button key="save" onClick={() => setIsOpen(false)} className="ml-2">Save</Button>,
                ]}
            />
            <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        </>
    );
};

export const Default = Template.bind({});

Default.args = Modal.defaultProps;

export const Fullscreen = Template.bind({});

Fullscreen.args = {
    ...Modal.defaultProps,
    fullscreen: true,
    children: [
        <p className="text-2xl lg:text-6xl font-medium my-2">Title</p>,
        <p className="text-base lg:text-3xl my-2">Subtitle</p>,
    ],
};
