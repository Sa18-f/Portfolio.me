import { FaCode, FaUnlink } from "react-icons/fa";
import { IoServerSharp } from "react-icons/io5";
const Projects = () => {
    const projects = [
        {
            img: 'https://i.ibb.co/c3W6whr/Whats-App-Image-2024-07-04-at-03-44-16-992ddc8c.jpg',
            name: 'BookCare',
            description: 'A vast collection of physical books and e-books covering a wide range of genres, including fiction, non-fiction, academic texts.',
            liveLink: 'https://library-management-syste-b1f31.web.app/',
            githubLink: 'https://github.com/Sa18-f/Library-Management-client?tab=readme-ov-file',
            githubLink2: 'https://github.com/Sa18-f/Library-Management-server'
        },
        {
            img: 'https://i.ibb.co/BsBKG1f/Whats-App-Image-2024-07-04-at-04-00-13-55dd2b25.jpg',
            name: 'FindHouse',
            description: 'It provides a seamless and intuitive platform for exploring, buying, rent and selling properties.',
            liveLink: 'https://cosmic-rugelach-ddb064.netlify.app/',
            githubLink: 'https://github.com/Sa18-f/Real-Estate-auth?tab=readme-ov-file',
            githubLink2: 'https://github.com/Sa18-f/Tourism-Management-server'
        },
        {
            img: 'https://i.ibb.co/QX8TTD5/Whats-App-Image-2024-07-04-at-03-48-53-5264be71.jpg',
            name: 'JourneyMingle',
            description: 'It offers a user-friendly platform for booking and managing personalized travel experiences.',
            liveLink: 'https://tourism-management-6d801.web.app/',
            githubLink: 'https://github.com/Sa18-f/Tourism-Management-client?tab=readme-ov-file',
            githubLink2: 'https://github.com/Sa18-f/Tourism-Management-server'
        },
    ];
    return (
        <section id="projects" className="container mx-auto p-2">
            <h2 className="text-gray-950 dark:text-gray-100 text-3xl md:text-5xl font-bold mb-2 tracking-tight text-start">My Featured Projects ⬇️</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {projects.map((project, index) => (
                    <div key={index} className="mt-8 shadow-md dark:bg-zinc-900 bg-zinc-100 rounded-xl border-2 border-solid border-zinc-400 dark:border-zinc-700 hover:border-zinc-600 dark:hover:border-white  transform hover:scale-110 transition-transform">
                        <img className="p-4 rounded-3xl" src={project.img} alt="Book Care" />
                        <h3 className="dark:text-gray-100 text-4xl font-bold tracking-tight mx-5">{project.name}</h3>
                        <p className="dark:text-gray-100 font-semibold text-md tracking-tight p-2 mx-5">{project.description}</p>
                        <div className="flex mt-4 mx-5 mb-5">
                            <a href={project.liveLink} className="bg-gray-900 dark:bg-gray-800 items-center hover:scale-110 transition-transform transform text-white dark:text-white flex gap-2 p-3 rounded-md font-medium">
                                <FaUnlink />
                            </a>
                            <a href={project.githubLink} className="bg-gray-900 dark:bg-gray-800 items-center hover:scale-110 text-xl transition-transform transform text-white dark:text-white flex gap-2 p-3 rounded-md font-medium ml-3"><FaCode></FaCode>
                            </a>
                            <a href={project.githubLink2} className="bg-gray-900 dark:bg-gray-800 items-center hover:scale-110 text-xl transition-transform transform text-white dark:text-white flex gap-2 p-3 rounded-md font-medium ml-3"><IoServerSharp />
                            </a>
                            <div className="flex">
                                <img className="lg:w-12 w-8 hover:scale-110 duration-200 transition cursor-pointer ml-3" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                                <img className="lg:w-12 w-8 hover:scale-110 duration-200 transition cursor-pointer mx-3" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
                                <img className="lg:w-12 w-8 hover:scale-110 duration-200 transition cursor-pointer" src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/MongoDB.svg"/>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;