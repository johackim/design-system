import Button from '@atoms/button';

export default {
    title: 'Atoms/Button',
    component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    ...Button.defaultProps,
    children: 'Button',
    path: '/',
};

export const Secondary = Template.bind({});

Secondary.args = {
    ...Button.defaultProps,
    secondary: true,
    children: 'Button',
    path: '/',
};

export const Loading = Template.bind({});

Loading.args = {
    ...Button.defaultProps,
    children: 'Button',
    loading: true,
    path: '/',
};
