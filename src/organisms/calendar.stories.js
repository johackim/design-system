import Calendar from '@organisms/calendar';

export default {
    title: 'Organisms/Calendar',
    component: Calendar,
};

const Template = (args) => (
    <div className="max-w-sm">
        <Calendar {...args} />
    </div>
);

export const Default = Template.bind({});

Default.args = Calendar.defaultProps;
