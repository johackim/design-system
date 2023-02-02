import Appointment from '@molecules/appointment';

export default {
    title: 'Molecules/Appointment',
    component: Appointment,
};

const Template = (args) => <Appointment {...args} />;

export const Default = Template.bind({});

Default.args = {
    ...Appointment.defaultProps,
    name: 'Appointment',
    location: 'La Cigale, Paris, France',
};

export const List = (args) => (
    <div className="divide-y dark:divide-gray-400/[.50] max-w-2xl">
        <Appointment {...args} />
        <Appointment {...args} />
        <Appointment {...args} />
    </div>
);

List.args = {
    ...Appointment.defaultProps,
    name: 'Appointment',
    location: 'La Cigale, Paris, France',
};

export const WithButton = (args) => (
    <div className="divide-y dark:divide-gray-400/[.50] max-w-2xl">
        <Appointment {...args} />
        <Appointment {...args} />
        <Appointment {...args} />
    </div>
);

WithButton.args = {
    ...Appointment.defaultProps,
    onClick: () => {},
    name: 'Appointment',
    location: 'La Cigale, Paris, France',
};
