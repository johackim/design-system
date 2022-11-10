import Graph from '@components/graph';
import { ShareIcon } from '@heroicons/react/outline';

export default {
    title: 'Components/Graph',
    component: Graph,
};

const Template = (args) => <Graph {...args} />;

export const Default = Template.bind({});

const nodes = [
    { id: 'Myriel' },
    { id: 'Napoleon' },
    { id: 'Mlle.Baptistine' },
    { id: 'Mme.Magloire' },
    { id: 'CountessdeLo' },
    { id: 'Geborand' },
    { id: 'Champtercier' },
    { id: 'Cravatte' },
    { id: 'Count' },
    { id: 'OldMan' },
    { id: 'Labarre' },
    { id: 'Valjean' },
    { id: 'Marguerite' },
    { id: 'Mme.deR' },
    { id: 'Isabeau' },
    { id: 'Gervais' },
    { id: 'Tholomyes' },
    { id: 'Listolier' },
    { id: 'Fameuil' },
    { id: 'Blacheville' },
    { id: 'Favourite' },
    { id: 'Dahlia' },
    { id: 'Zephine' },
    { id: 'Fantine' },
    { id: 'Mme.Thenardier' },
    { id: 'Thenardier' },
    { id: 'Cosette' },
    { id: 'Javert' },
    { id: 'Fauchelevent' },
    { id: 'Bamatabois' },
    { id: 'Perpetue' },
    { id: 'Simplice' },
    { id: 'Scaufflaire' },
    { id: 'Woman1' },
    { id: 'Judge' },
    { id: 'Champmathieu' },
    { id: 'Brevet' },
    { id: 'Chenildieu' },
    { id: 'Cochepaille' },
    { id: 'Pontmercy' },
    { id: 'Boulatruelle' },
    { id: 'Eponine' },
    { id: 'Anzelma' },
    { id: 'Woman2' },
    { id: 'MotherInnocent' },
    { id: 'Gribier' },
    { id: 'Jondrette' },
    { id: 'Mme.Burgon' },
    { id: 'Gavroche' },
    { id: 'Gillenormand' },
    { id: 'Magnon' },
    { id: 'Mlle.Gillenormand' },
    { id: 'Mme.Pontmercy' },
    { id: 'Mlle.Vaubois' },
    { id: 'Lt.Gillenormand' },
    { id: 'Marius' },
    { id: 'BaronessT' },
    { id: 'Mabeuf' },
    { id: 'Enjolras' },
    { id: 'Combeferre' },
    { id: 'Prouvaire' },
    { id: 'Feuilly' },
    { id: 'Courfeyrac' },
    { id: 'Bahorel' },
    { id: 'Bossuet' },
    { id: 'Joly' },
    { id: 'Grantaire' },
    { id: 'MotherPlutarch' },
    { id: 'Gueulemer' },
    { id: 'Babet' },
    { id: 'Claquesous' },
    { id: 'Montparnasse' },
    { id: 'Toussaint' },
    { id: 'Child1' },
    { id: 'Child2' },
    { id: 'Brujon' },
    { id: 'Mme.Hucheloup' },
];

const links = [
    { source: 'Napoleon', target: 'Myriel' },
    { source: 'Mlle.Baptistine', target: 'Myriel' },
    { source: 'Mme.Magloire', target: 'Myriel' },
    { source: 'Mme.Magloire', target: 'Mlle.Baptistine' },
    { source: 'CountessdeLo', target: 'Myriel' },
    { source: 'Geborand', target: 'Myriel' },
    { source: 'Champtercier', target: 'Myriel' },
    { source: 'Cravatte', target: 'Myriel' },
    { source: 'Count', target: 'Myriel' },
    { source: 'OldMan', target: 'Myriel' },
    { source: 'Valjean', target: 'Labarre' },
    { source: 'Valjean', target: 'Mme.Magloire' },
    { source: 'Valjean', target: 'Mlle.Baptistine' },
    { source: 'Valjean', target: 'Myriel' },
    { source: 'Marguerite', target: 'Valjean' },
    { source: 'Mme.deR', target: 'Valjean' },
    { source: 'Isabeau', target: 'Valjean' },
    { source: 'Gervais', target: 'Valjean' },
    { source: 'Listolier', target: 'Tholomyes' },
    { source: 'Fameuil', target: 'Tholomyes' },
    { source: 'Fameuil', target: 'Listolier' },
    { source: 'Blacheville', target: 'Tholomyes' },
    { source: 'Blacheville', target: 'Listolier' },
    { source: 'Blacheville', target: 'Fameuil' },
    { source: 'Favourite', target: 'Tholomyes' },
    { source: 'Favourite', target: 'Listolier' },
    { source: 'Favourite', target: 'Fameuil' },
    { source: 'Favourite', target: 'Blacheville' },
    { source: 'Dahlia', target: 'Tholomyes' },
    { source: 'Dahlia', target: 'Listolier' },
    { source: 'Dahlia', target: 'Fameuil' },
    { source: 'Dahlia', target: 'Blacheville' },
    { source: 'Dahlia', target: 'Favourite' },
    { source: 'Zephine', target: 'Tholomyes' },
    { source: 'Zephine', target: 'Listolier' },
    { source: 'Zephine', target: 'Fameuil' },
    { source: 'Zephine', target: 'Blacheville' },
    { source: 'Zephine', target: 'Favourite' },
    { source: 'Zephine', target: 'Dahlia' },
    { source: 'Fantine', target: 'Tholomyes' },
    { source: 'Fantine', target: 'Listolier' },
    { source: 'Fantine', target: 'Fameuil' },
    { source: 'Fantine', target: 'Blacheville' },
    { source: 'Fantine', target: 'Favourite' },
    { source: 'Fantine', target: 'Dahlia' },
    { source: 'Fantine', target: 'Zephine' },
    { source: 'Fantine', target: 'Marguerite' },
    { source: 'Fantine', target: 'Valjean' },
    { source: 'Mme.Thenardier', target: 'Fantine' },
    { source: 'Mme.Thenardier', target: 'Valjean' },
    { source: 'Thenardier', target: 'Mme.Thenardier' },
    { source: 'Thenardier', target: 'Fantine' },
    { source: 'Thenardier', target: 'Valjean' },
    { source: 'Cosette', target: 'Mme.Thenardier' },
    { source: 'Cosette', target: 'Valjean' },
    { source: 'Cosette', target: 'Tholomyes' },
    { source: 'Cosette', target: 'Thenardier' },
    { source: 'Javert', target: 'Valjean' },
    { source: 'Javert', target: 'Fantine' },
    { source: 'Javert', target: 'Thenardier' },
    { source: 'Javert', target: 'Mme.Thenardier' },
    { source: 'Javert', target: 'Cosette' },
    { source: 'Fauchelevent', target: 'Valjean' },
    { source: 'Fauchelevent', target: 'Javert' },
    { source: 'Bamatabois', target: 'Fantine' },
    { source: 'Bamatabois', target: 'Javert' },
    { source: 'Bamatabois', target: 'Valjean' },
    { source: 'Perpetue', target: 'Fantine' },
    { source: 'Simplice', target: 'Perpetue' },
    { source: 'Simplice', target: 'Valjean' },
    { source: 'Simplice', target: 'Fantine' },
    { source: 'Simplice', target: 'Javert' },
    { source: 'Scaufflaire', target: 'Valjean' },
    { source: 'Woman1', target: 'Valjean' },
    { source: 'Woman1', target: 'Javert' },
    { source: 'Judge', target: 'Valjean' },
    { source: 'Judge', target: 'Bamatabois' },
    { source: 'Champmathieu', target: 'Valjean' },
    { source: 'Champmathieu', target: 'Judge' },
    { source: 'Champmathieu', target: 'Bamatabois' },
    { source: 'Brevet', target: 'Judge' },
    { source: 'Brevet', target: 'Champmathieu' },
    { source: 'Brevet', target: 'Valjean' },
    { source: 'Brevet', target: 'Bamatabois' },
    { source: 'Chenildieu', target: 'Judge' },
    { source: 'Chenildieu', target: 'Champmathieu' },
    { source: 'Chenildieu', target: 'Brevet' },
    { source: 'Chenildieu', target: 'Valjean' },
    { source: 'Chenildieu', target: 'Bamatabois' },
    { source: 'Cochepaille', target: 'Judge' },
    { source: 'Cochepaille', target: 'Champmathieu' },
    { source: 'Cochepaille', target: 'Brevet' },
    { source: 'Cochepaille', target: 'Chenildieu' },
    { source: 'Cochepaille', target: 'Valjean' },
    { source: 'Cochepaille', target: 'Bamatabois' },
    { source: 'Pontmercy', target: 'Thenardier' },
    { source: 'Boulatruelle', target: 'Thenardier' },
    { source: 'Eponine', target: 'Mme.Thenardier' },
    { source: 'Eponine', target: 'Thenardier' },
    { source: 'Anzelma', target: 'Eponine' },
    { source: 'Anzelma', target: 'Thenardier' },
    { source: 'Anzelma', target: 'Mme.Thenardier' },
    { source: 'Woman2', target: 'Valjean' },
    { source: 'Woman2', target: 'Cosette' },
    { source: 'Woman2', target: 'Javert' },
    { source: 'MotherInnocent', target: 'Fauchelevent' },
    { source: 'MotherInnocent', target: 'Valjean' },
    { source: 'Gribier', target: 'Fauchelevent' },
    { source: 'Mme.Burgon', target: 'Jondrette' },
    { source: 'Gavroche', target: 'Mme.Burgon' },
    { source: 'Gavroche', target: 'Thenardier' },
    { source: 'Gavroche', target: 'Javert' },
    { source: 'Gavroche', target: 'Valjean' },
    { source: 'Gillenormand', target: 'Cosette' },
    { source: 'Gillenormand', target: 'Valjean' },
    { source: 'Magnon', target: 'Gillenormand' },
    { source: 'Magnon', target: 'Mme.Thenardier' },
    { source: 'Mlle.Gillenormand', target: 'Gillenormand' },
    { source: 'Mlle.Gillenormand', target: 'Cosette' },
    { source: 'Mlle.Gillenormand', target: 'Valjean' },
    { source: 'Mme.Pontmercy', target: 'Mlle.Gillenormand' },
    { source: 'Mme.Pontmercy', target: 'Pontmercy' },
    { source: 'Mlle.Vaubois', target: 'Mlle.Gillenormand' },
    { source: 'Lt.Gillenormand', target: 'Mlle.Gillenormand' },
    { source: 'Lt.Gillenormand', target: 'Gillenormand' },
    { source: 'Lt.Gillenormand', target: 'Cosette' },
    { source: 'Marius', target: 'Mlle.Gillenormand' },
    { source: 'Marius', target: 'Gillenormand' },
    { source: 'Marius', target: 'Pontmercy' },
    { source: 'Marius', target: 'Lt.Gillenormand' },
    { source: 'Marius', target: 'Cosette' },
    { source: 'Marius', target: 'Valjean' },
    { source: 'Marius', target: 'Tholomyes' },
    { source: 'Marius', target: 'Thenardier' },
    { source: 'Marius', target: 'Eponine' },
    { source: 'Marius', target: 'Gavroche' },
    { source: 'BaronessT', target: 'Gillenormand' },
    { source: 'BaronessT', target: 'Marius' },
    { source: 'Mabeuf', target: 'Marius' },
    { source: 'Mabeuf', target: 'Eponine' },
    { source: 'Mabeuf', target: 'Gavroche' },
    { source: 'Enjolras', target: 'Marius' },
    { source: 'Enjolras', target: 'Gavroche' },
    { source: 'Enjolras', target: 'Javert' },
    { source: 'Enjolras', target: 'Mabeuf' },
    { source: 'Enjolras', target: 'Valjean' },
    { source: 'Combeferre', target: 'Enjolras' },
    { source: 'Combeferre', target: 'Marius' },
    { source: 'Combeferre', target: 'Gavroche' },
    { source: 'Combeferre', target: 'Mabeuf' },
    { source: 'Prouvaire', target: 'Gavroche' },
    { source: 'Prouvaire', target: 'Enjolras' },
    { source: 'Prouvaire', target: 'Combeferre' },
    { source: 'Feuilly', target: 'Gavroche' },
    { source: 'Feuilly', target: 'Enjolras' },
    { source: 'Feuilly', target: 'Prouvaire' },
    { source: 'Feuilly', target: 'Combeferre' },
    { source: 'Feuilly', target: 'Mabeuf' },
    { source: 'Feuilly', target: 'Marius' },
    { source: 'Courfeyrac', target: 'Marius' },
    { source: 'Courfeyrac', target: 'Enjolras' },
    { source: 'Courfeyrac', target: 'Combeferre' },
    { source: 'Courfeyrac', target: 'Gavroche' },
    { source: 'Courfeyrac', target: 'Mabeuf' },
    { source: 'Courfeyrac', target: 'Eponine' },
    { source: 'Courfeyrac', target: 'Feuilly' },
    { source: 'Courfeyrac', target: 'Prouvaire' },
    { source: 'Bahorel', target: 'Combeferre' },
    { source: 'Bahorel', target: 'Gavroche' },
    { source: 'Bahorel', target: 'Courfeyrac' },
    { source: 'Bahorel', target: 'Mabeuf' },
    { source: 'Bahorel', target: 'Enjolras' },
    { source: 'Bahorel', target: 'Feuilly' },
    { source: 'Bahorel', target: 'Prouvaire' },
    { source: 'Bahorel', target: 'Marius' },
    { source: 'Bossuet', target: 'Marius' },
    { source: 'Bossuet', target: 'Courfeyrac' },
    { source: 'Bossuet', target: 'Gavroche' },
    { source: 'Bossuet', target: 'Bahorel' },
    { source: 'Bossuet', target: 'Enjolras' },
    { source: 'Bossuet', target: 'Feuilly' },
    { source: 'Bossuet', target: 'Prouvaire' },
    { source: 'Bossuet', target: 'Combeferre' },
    { source: 'Bossuet', target: 'Mabeuf' },
    { source: 'Bossuet', target: 'Valjean' },
    { source: 'Joly', target: 'Bahorel' },
    { source: 'Joly', target: 'Bossuet' },
    { source: 'Joly', target: 'Gavroche' },
    { source: 'Joly', target: 'Courfeyrac' },
    { source: 'Joly', target: 'Enjolras' },
    { source: 'Joly', target: 'Feuilly' },
    { source: 'Joly', target: 'Prouvaire' },
    { source: 'Joly', target: 'Combeferre' },
    { source: 'Joly', target: 'Mabeuf' },
    { source: 'Joly', target: 'Marius' },
    { source: 'Grantaire', target: 'Bossuet' },
    { source: 'Grantaire', target: 'Enjolras' },
    { source: 'Grantaire', target: 'Combeferre' },
    { source: 'Grantaire', target: 'Courfeyrac' },
    { source: 'Grantaire', target: 'Joly' },
    { source: 'Grantaire', target: 'Gavroche' },
    { source: 'Grantaire', target: 'Bahorel' },
    { source: 'Grantaire', target: 'Feuilly' },
    { source: 'Grantaire', target: 'Prouvaire' },
    { source: 'MotherPlutarch', target: 'Mabeuf' },
    { source: 'Gueulemer', target: 'Thenardier' },
    { source: 'Gueulemer', target: 'Valjean' },
    { source: 'Gueulemer', target: 'Mme.Thenardier' },
    { source: 'Gueulemer', target: 'Javert' },
    { source: 'Gueulemer', target: 'Gavroche' },
    { source: 'Gueulemer', target: 'Eponine' },
    { source: 'Babet', target: 'Thenardier' },
    { source: 'Babet', target: 'Gueulemer' },
    { source: 'Babet', target: 'Valjean' },
    { source: 'Babet', target: 'Mme.Thenardier' },
    { source: 'Babet', target: 'Javert' },
    { source: 'Babet', target: 'Gavroche' },
    { source: 'Babet', target: 'Eponine' },
    { source: 'Claquesous', target: 'Thenardier' },
    { source: 'Claquesous', target: 'Babet' },
    { source: 'Claquesous', target: 'Gueulemer' },
    { source: 'Claquesous', target: 'Valjean' },
    { source: 'Claquesous', target: 'Mme.Thenardier' },
    { source: 'Claquesous', target: 'Javert' },
    { source: 'Claquesous', target: 'Eponine' },
    { source: 'Claquesous', target: 'Enjolras' },
    { source: 'Montparnasse', target: 'Javert' },
    { source: 'Montparnasse', target: 'Babet' },
    { source: 'Montparnasse', target: 'Gueulemer' },
    { source: 'Montparnasse', target: 'Claquesous' },
    { source: 'Montparnasse', target: 'Valjean' },
    { source: 'Montparnasse', target: 'Gavroche' },
    { source: 'Montparnasse', target: 'Eponine' },
    { source: 'Montparnasse', target: 'Thenardier' },
    { source: 'Toussaint', target: 'Cosette' },
    { source: 'Toussaint', target: 'Javert' },
    { source: 'Toussaint', target: 'Valjean' },
    { source: 'Child1', target: 'Gavroche' },
    { source: 'Child2', target: 'Gavroche' },
    { source: 'Child2', target: 'Child1' },
    { source: 'Brujon', target: 'Babet' },
    { source: 'Brujon', target: 'Gueulemer' },
    { source: 'Brujon', target: 'Thenardier' },
    { source: 'Brujon', target: 'Gavroche' },
    { source: 'Brujon', target: 'Eponine' },
    { source: 'Brujon', target: 'Claquesous' },
    { source: 'Brujon', target: 'Montparnasse' },
    { source: 'Mme.Hucheloup', target: 'Bossuet' },
    { source: 'Mme.Hucheloup', target: 'Joly' },
    { source: 'Mme.Hucheloup', target: 'Grantaire' },
    { source: 'Mme.Hucheloup', target: 'Bahorel' },
    { source: 'Mme.Hucheloup', target: 'Courfeyrac' },
    { source: 'Mme.Hucheloup', target: 'Gavroche' },
    { source: 'Mme.Hucheloup', target: 'Enjolras' },
];

Default.args = {
    ...Graph.defaultProps,
    nodes,
    links,
    colors: {
        ...Graph.defaultProps.colors,
        default: '#7B7D8C',
        link: '#CBD5E1',
        selected: '#7B6DD6',
    },
};

export const WithWidget = Template.bind({});

WithWidget.args = {
    ...Default.args,
    width: 600,
    height: 200,
};

WithWidget.decorators = [(Story) => (
    <div className="p-4 border dark:border-gray-800 mb-4 max-w-screen-sm">
        <div>
            <ShareIcon className="h-4 w-4 inline dark:text-white" />
            <span className="ml-2 align-middle">Exploration</span>
        </div>

        <hr className="dark:border-gray-800 my-2" />

        <div className="h-52 max-w-screen-sm">
            <Story />
        </div>
    </div>
)];
