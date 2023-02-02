import Gallery from '@molecules/gallery';

export default {
    title: 'Molecules/Gallery',
    component: Gallery,
};

const Template = (args) => <Gallery {...args} />;

export const Default = Template.bind({});

Default.args = {
    ...Gallery.defaultProps,
    images: [
        'https://i.imgur.com/I9QsRFA.jpg',
        'https://i.imgur.com/6K77FFW.jpg',
        'https://i.imgur.com/okBghcp.jpg',
        'https://i.imgur.com/BcvzBhA.jpg',
        'https://i.imgur.com/TmrvsTD.jpg',
        'https://i.imgur.com/TV2XAtU.jpg',
    ],
};
