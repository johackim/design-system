import Checkbox from '@components/checkbox';

export default {
    title: 'Components/Checkbox',
    component: Checkbox,
};

const Template = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});

Default.args = Checkbox.defaultProps;
