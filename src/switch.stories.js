import Switch from '@components/switch';

export default {
    title: 'Components/Switch',
    component: Switch,
};

const Template = (args) => <Switch {...args} />;

export const Default = Template.bind({});

Default.args = Switch.defaultProps;
