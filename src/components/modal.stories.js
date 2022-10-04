import Modal from '@components/modal';

export default {
    title: 'Components/Modal',
    component: Modal,
};

const Template = (args) => <Modal {...args} />;

export const Default = Template.bind({});

Default.args = {
    ...Modal.defaultProps,
    children: [
        <p className="text-2xl lg:text-6xl font-medium my-2">Title</p>,
        <p className="text-base lg:text-3xl my-2">Subtitle</p>,
    ],
};
