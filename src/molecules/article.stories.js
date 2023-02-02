import Article from '@molecules/article';

export default {
    title: 'Molecules/Article',
    component: Article,
};

const Template = (args) => (
    <div className="max-w-screen-md border dark:border-gray-800 p-4">
        <Article {...args} />
    </div>
);

export const Default = Template.bind({});

Default.args = {
    ...Article.defaultProps,
    children: (
        <>
            <p>Introduction de l'article</p>
            <h2>Title 2</h2>
            <p>Amet sequi ratione totam repudiandae quibusdam, laboriosam Voluptates iusto fugit perferendis soluta iste? Provident odio aut rem corrupti aliquam a Quaerat aliquam aperiam voluptatibus quasi consectetur omnis perspiciatis. Porro similique</p>
            <blockquote>
                <p>Quote</p>
            </blockquote>
        </>
    ),
};
