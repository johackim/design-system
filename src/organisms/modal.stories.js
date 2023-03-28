import Modal from '@organisms/modal';
import Button from '@atoms/button';

export default {
    title: 'Organisms/Modal',
    component: Modal,
};

const Template = (args) => <Modal {...args} />;

export const Default = Template.bind({});

Default.args = {
    ...Modal.defaultProps,
    footer: (
        <>
            <Button secondary>Cancel</Button>
            <Button>Save</Button>
        </>
    ),
};

export const Fullscreen = Template.bind({});

Fullscreen.args = {
    ...Modal.defaultProps,
    fullscreen: true,
    children: [
        <p className="text-2xl lg:text-6xl font-medium my-2">Title</p>,
        <p className="text-base lg:text-3xl my-2">Subtitle</p>,
    ],
};
