import Section from '@molecules/section';

export default {
    title: 'Molecules/Section',
    component: Section,
};

const Template = (args) => (
    <Section {...args}>
        <Section.Title>Section Title</Section.Title>
        <Section.Description>Section Description</Section.Description>
        <Section.Content>Section Content</Section.Content>
    </Section>
);

export const Default = Template.bind({});

Default.args = Section.defaultProps;
