import Select from '@atoms/select';

export default {
    title: 'Atoms/Select',
    component: Select,
};

const Template = (args) => <Select {...args} />;

export const Default = Template.bind({});

Default.args = {
    ...Select.defaultProps,
    options: ['United States', 'Canada', 'France'],
};

export const WithLabel = Template.bind({});

WithLabel.args = {
    ...Default.args,
    label: 'Label',
};
