import Calendar from '@components/calendar';

export default {
    title: 'Components/Calendar',
    component: Calendar,
};

const Template = (args) => (
    <div className="max-w-sm">
        <Calendar {...args} />
    </div>
);

export const Default = Template.bind({});

Default.args = Calendar.defaultProps;
