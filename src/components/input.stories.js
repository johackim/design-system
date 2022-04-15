import Input from '@components/input';

export default {
    title: 'Components/Input',
    component: Input,
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});

Default.args = Input.defaultProps;

export const Disabled = Template.bind({});

Disabled.args = {
    ...Input.defaultProps,
    disabled: true,
};

export const WithLabel = Template.bind({});

WithLabel.args = {
    ...Input.defaultProps,
    label: 'Label',
};
