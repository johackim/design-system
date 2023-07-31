import Text from '@atoms/text';

export default {
    title: 'Atoms/Text',
    component: Text,
};

const Template = (args) => <Text {...args} />;

export const Default = Template.bind({});

Default.args = Text.defaultProps;
