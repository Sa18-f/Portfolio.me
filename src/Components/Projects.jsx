

const Projects = () => {
    const projects = [
        {
            img: 'https://i.ibb.co/c3W6whr/Whats-App-Image-2024-07-04-at-03-44-16-992ddc8c.jpg',
            name: 'BookCare',
            description: 'A vast collection of physical books and e-books covering a wide range of genres, including fiction, non-fiction, academic texts.',
            liveLink: 'https://library-management-syste-b1f31.web.app/',
            githubLink: 'https://github.com/Sa18-f/Library-Management-client?tab=readme-ov-file',
        },
        {
            img: 'https://i.ibb.co/BsBKG1f/Whats-App-Image-2024-07-04-at-04-00-13-55dd2b25.jpg',
            name: 'FindHouse',
            description: 'It provides a seamless and intuitive platform for exploring, buying, rent and selling properties.',
            liveLink: 'https://cosmic-rugelach-ddb064.netlify.app/',
            githubLink: 'https://github.com/Sa18-f/Real-Estate-auth?tab=readme-ov-file',
        },
        {
            img: 'https://i.ibb.co/QX8TTD5/Whats-App-Image-2024-07-04-at-03-48-53-5264be71.jpg',
            name: 'JourneyMingle',
            description: 'It offers a user-friendly platform for booking and managing personalized travel experiences.',
            liveLink: 'https://tourism-management-6d801.web.app/',
            githubLink: 'https://github.com/Sa18-f/Tourism-Management-client?tab=readme-ov-file',
        },
    ];
    return (
        <section id="projects" className="container p-5">
            <h2 className="text-gray-950 dark:text-gray-100 text-3xl md:text-5xl font-bold mb-2 tracking-tight text-start">My Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {projects.map((project, index) => (
                    <div key={index} className="mt-8 shadow-md dark:bg-zinc-900 bg-zinc-100 rounded-xl border-2 border-solid border-zinc-400 dark:border-zinc-700 hover:border-zinc-600 dark:hover:border-white  transform hover:scale-103 transition-transform">
                        <img className="p-4 rounded-3xl" src={project.img} alt="Book Care" />
                        <h3 className="dark:text-gray-100 text-4xl font-bold tracking-tight mx-5">{project.name}</h3>
                        <p className="dark:text-gray-100 font-semibold text-md tracking-tight p-2 mx-5">{project.description}</p>
                        <div className="flex mt-4 mx-5 mb-5">
                            <a href={project.liveLink}className="bg-gray-900 dark:bg-gray-100 items-center hover:scale-110 transition-transform transform text-white dark:text-black flex gap-2 p-3 rounded-md font-medium">Preview
                                <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor"></path>
                                </svg>
                            </a>
                            <a href={project.githubLink} className="bg-gray-900  items-center hover:scale-110 transition-transform transform dark:bg-gray-100 text-white dark:text-black flex gap-2 p-3 rounded-md font-medium ml-5">Github
                                <svg className="fill-white dark:fill-black" width="22" height="22" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;