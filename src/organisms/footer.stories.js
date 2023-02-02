import Footer from '@organisms/footer';
import Link from '@atoms/link';

export default {
    title: 'Organisms/Footer',
    component: Footer,
};

const Template = (args) => <Footer {...args} />;

export const Default = Template.bind({});

Default.args = {
    ...Footer.defaultProps,
    children: [
        <Link href="/1">Link 1</Link>,
        <Link href="/2">Link 2</Link>,
        <Link href="/3">Link 3</Link>,
    ],
};

export const WithStartYear = Template.bind({});

WithStartYear.args = {
    ...Default.args,
    startYear: '2020',
};
