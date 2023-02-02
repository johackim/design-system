import SidebarLayout from '@templates/sidebarLayout';

export default {
    title: 'Templates/SidebarLayout',
    component: SidebarLayout,
    decorators: [(Story) => <div id="storybook">{Story()}</div>],
};

const Template = (args) => <SidebarLayout {...args} />;

export const Default = Template.bind({});

Default.args = SidebarLayout.defaultProps;
