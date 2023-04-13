import Button from '@atoms/button';

export default {
    title: 'Atoms/Button',
    component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = Button.defaultProps;

export const Secondary = Template.bind({});

Secondary.args = {
    ...Button.defaultProps,
    secondary: true,
};

export const Loading = Template.bind({});

Loading.args = {
    ...Button.defaultProps,
    loading: true,
};

export const Disabled = Template.bind({});

Disabled.args = {
    ...Button.defaultProps,
    disabled: true,
};
