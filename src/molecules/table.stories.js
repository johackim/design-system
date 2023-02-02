import Table from '@molecules/table';

export default {
    title: 'Molecules/Table',
    component: Table,
    decorators: [(Story) => <div className="max-w-xl">{Story()}</div>],
};

const Template = (args) => <Table {...args} />;

export const Default = Template.bind({});

Default.args = Table.defaultProps;
