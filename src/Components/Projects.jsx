

const Projects = () => {
    const projects = [
        {
            name: 'Recipe Finder',
            description: 'Quickly generate tasty recipes based on available ingredients.',
            liveLink: '#',
            githubLink: '#',
        },
        {
            name: 'File Encryption Tool',
            description: 'Allows Encryption/Decryption of multiple file formats.',
            liveLink: '#',
            githubLink: '#',
        },
        {
            name: 'NPM Package',
            description: 'The currency converter package supports 22 currencies with real-time exchange rates.',
            liveLink: '#',
            githubLink: '#',
        },
    ];
    return (
        <section id="projects" className="container mx-auto p-5">
            <h2 className="text-3xl mb-3">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {projects.map((project, index) => (
                    <div key={index} className="bg-white p-5 rounded shadow-md">
                        <h3 className="text-xl mb-2">{project.name}</h3>
                        <p>{project.description}</p>
                        <div className="mt-2">
                            <a href={project.liveLink} className="text-blue-500 hover:underline">Website</a> |
                            <a href={project.githubLink} className="text-blue-500 hover:underline">GitHub</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;