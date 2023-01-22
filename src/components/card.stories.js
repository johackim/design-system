import Card from '@components/card';

export default {
    title: 'Components/Card',
    component: Card,
    decorators: [(Story) => <div className="max-w-xs">{Story()}</div>],
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});

Default.args = Card.defaultProps;

export const Small = Template.bind({});

Small.args = {
    ...Default.defaultProps,
    small: true,
};
