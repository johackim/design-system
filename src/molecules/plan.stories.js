import Plan from '@molecules/plan';

export default {
    title: 'Molecules/Plan',
    component: Plan,
    decorators: [(Story) => <div className="max-w-xs">{Story()}</div>],
};

const Template = (args) => <Plan {...args} />;

export const Default = Template.bind({});

Default.args = Plan.defaultProps;
