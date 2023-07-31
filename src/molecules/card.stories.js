import Card from '@molecules/card';

export default {
    title: 'Molecules/Card',
    component: Card,
    decorators: [(Story) => <div className="max-w-xs">{Story()}</div>],
};

const Template = (args) => (
    <Card {...args}>
        <Card.Name>name</Card.Name>
        <Card.Value>value</Card.Value>
    </Card>
);

export const Default = Template.bind({});

Default.args = Card.defaultProps;
