

const Skills = () => {
    return (
        <section id="skills" className="container mx-auto my-12 p-2">
            <h2 className="mb-3 text-start"><span className="text-xl">My Arsenal</span> <span className="font-extrabold text-white text-3xl md:text-5xl mb-2 tracking-tight">Skills ⬇️</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
                <div className="my-5 shadow-md dark:bg-zinc-900 bg-zinc-100 rounded-xl border-2 border-solid border-zinc-400 dark:border-zinc-700 hover:border-zinc-600 dark:hover:border-white  transform hover:scale-110 transition-transform px-5 pt-5">
                    <h3 className="text-gray-950 dark:text-gray-100 text-3xl md:text-3xl font-bold mb-8 tracking-tight border-b-2 pb-2">Languages and Frameworks</h3>
                    <div className="grid grid-cols-4 md:grid-cols-5 gap-12 my-4 lg:w-[500px]">
                        <div>
                            <img className="lg:w-16 w-14 hover:scale-110 duration-200 transition cursor-pointer" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
                        </div>
                        <div>
                            <img className="lg:w-16 w-14 hover:scale-110 duration-200 transition cursor-pointer" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
                        </div>
                        <div>
                            <img className="lg:w-16 w-14 hover:scale-110 duration-200 transition cursor-pointer rounded-md" src="https://i.ibb.co/HtYF1SW/images-2.png" />
                        </div>
                        <div>
                            <img className="lg:w-16 w-14 hover:scale-110 duration-200 transition cursor-pointer" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />
                        </div>
                        <div>
                            <img className="lg:w-16 w-14 hover:scale-110 duration-200 transition cursor-pointer" src="https://i.ibb.co/L5WGy0c/images-4-removebg-preview.png" />
                        </div>
                        <div>
                            <img className="lg:w-16 w-14 hover:scale-110 duration-200 transition cursor-pointer" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                        </div>
                        <div>
                            <img className="lg:w-16 w-14 hover:scale-110 duration-200 transition cursor-pointer" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                        </div>
                        <div>
                            <img className="lg:w-16 w-14 hover:scale-110 duration-200 transition cursor-pointer" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
                        </div>
                        <div>
                            <img className="lg:w-16 w-14 hover:scale-110 duration-200 transition cursor-pointer" src="https://skillicons.dev/icons?i=express" />
                        </div>
                        <div>
                            <img className="lg:w-16 w-14 hover:scale-110 duration-200 transition cursor-pointer" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" />
                        </div>
                    </div>
                </div>
                <div className="my-5 shadow-md dark:bg-zinc-900 bg-zinc-100 rounded-xl border-2 border-solid border-zinc-400 dark:border-zinc-700 hover:border-zinc-600 dark:hover:border-white  transform hover:scale-110 transition-transform px-5 pt-5">
                    <h3 className="text-gray-950 dark:text-gray-100 text-3xl md:text-3xl font-bold mb-8 tracking-tight border-b-2 pb-2">Database and Tools</h3>
                    <div className="grid grid-cols-4 md:grid-cols-5 gap-12 my-4">
                        <div>
                            <img className="lg:w-16 w-14 hover:scale-110 duration-200 transition cursor-pointer" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" />
                        </div>
                        <div>
                            <img className="lg:w-16 w-14 hover:scale-110 duration-200 transition cursor-pointer" src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/MongoDB.svg" />
                        </div>
                        {/* <div>
                            <img className="lg:w- w-14 hover:scale-110 duration-200 transition cursor-pointer" src="                            https://i.ibb.co/0spxRgZ/vite-js-logo-removebg-preview.png" />
                        </div> */}
                        <div>
                            <img className="lg:w-16 w-14 hover:scale-110 duration-200 transition cursor-pointer" src="https://skillicons.dev/icons?i=vercel" alt="Vercel" />
                        </div>
                        <div>
                            <img className="lg:w-16 w-14 hover:scale-110 duration-200 transition cursor-pointer" src="https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg" />
                        </div>
                        <div>
                            <img className="lg:w-16 w-14 hover:scale-110 duration-200 transition cursor-pointer" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"/>
                        </div>
                        <div>
                            <img className="lg:w-16 w-14 hover:scale-110 duration-200 transition cursor-pointer" src="https://skillicons.dev/icons?i=github" alt="GitHub" />
                        </div>
                        {/* <div>
                            <img className="w-20 h-20 hover:scale-110 duration-200 transition cursor-pointer" src="/public/figma-icon.svg" alt="" />
                        </div> */}
                        <div>
                            <img className="lg:w-16 w-14 hover:scale-110 duration-200 transition cursor-pointer" src="https://i.ibb.co/HqFnvrN/format-pix-removebg-preview.png" alt="" />
                        </div>
                        {/* <div>
                            <img className="hover:scale-110 duration-200 transition cursor-pointer" src="/public/visual-studio-code-1.svg" alt="" />
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;