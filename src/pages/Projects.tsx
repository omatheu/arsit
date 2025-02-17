import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const ProjectsPage = () => {
    const projects = [
        {
            id: 1,
            title: 'Parceria Global com a InoVo Services',
            description: 'Atendemos projetos e clientes no Brasil em parceria com a InoVo Services, uma empresa global com sede nos Estados Unidos.',
            link: '/cases-de-sucesso',
            imageUrl: 'https://arsit.com.br/images/alp2.jpg'
        },
        {
            id: 2,
            title: 'IA - Inteligência Artificial nos Negócios',
            description: 'Descubra como nossas soluções de IA podem otimizar e transformar os processos empresariais.',
            link: '/inteligencia-artificial',
            imageUrl: 'https://arsit.com.br/media/favslider/demo/slide04_ot.jpg'
        },
        {
            id: 3,
            title: 'Atendimento Governamental',
            description: 'Desde 2018, apoiamos clientes governamentais em todo o Brasil, oferecendo soluções completas em TI.',
            link: '/governo',
            imageUrl: 'https://arsit.com.br/images/brasil_tecnologia2.jpg'
        },
        {
            id: 4,
            title: 'Cloud Computing e Datacenters',
            description: 'Experiência em projetos, implantações e suporte nos três maiores datacenters do país.',
            link: '/cloud',
            imageUrl: 'https://arsit.com.br/images/datacenter.jpg'
        }
    ];

    return (
        <>
            <Navbar />
            <div className="mt-8">
                <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center">Nossos Projetos e Cases de Sucesso</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
                    {projects.map((project) => (
                        <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-2">{project.title}</h2>
                                <p className="text-gray-600 mb-4">{project.description}</p>
                                <Link to={project.link} className="text-blue-600 font-bold hover:underline">Saiba mais</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default ProjectsPage;
