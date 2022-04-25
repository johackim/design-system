import Panel from '@components/panel';
import Button from '@components/button';

export default {
    title: 'Components/Panel',
    component: Panel,
};

const Template = (args) => <Panel {...args} />;

export const Default = Template.bind({});

Default.args = {
    ...Panel.defaultProps,
    children: <p>Panel content</p>,
};

export const WithTitle = Template.bind({});

WithTitle.args = {
    ...Panel.defaultProps,
    title: 'Title',
    children: <p>Panel content</p>,
};

export const WithDescription = Template.bind({});

WithDescription.args = {
    ...Panel.defaultProps,
    title: 'Title',
    description: 'Description',
    children: <p>Panel content</p>,
};

export const WithFooter = Template.bind({});

WithFooter.args = {
    ...Panel.defaultProps,
    footer: <Button>Button</Button>,
    children: <p>Panel content</p>,
};
