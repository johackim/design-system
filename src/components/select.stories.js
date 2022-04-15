import Select from '@components/select';

export default {
    title: 'Components/Select',
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
