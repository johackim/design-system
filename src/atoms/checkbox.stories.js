import Checkbox from '@atoms/checkbox';

export default {
    title: 'Atoms/Checkbox',
    component: Checkbox,
};

const Template = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});

Default.args = Checkbox.defaultProps;

export const WithLabel = Template.bind({});

WithLabel.args = {
    ...Checkbox.defaultProps,
    label: 'Checkbox',
};
