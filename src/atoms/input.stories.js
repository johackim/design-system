import Input from '@atoms/input';

export default {
    title: 'Atoms/Input',
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

export const WithAddOn = Template.bind({});

WithAddOn.args = {
    ...Input.defaultProps,
    addOn: 'https://',
};
