

const Skills = () => {
    return (
        <section id="skills" className="container mx-auto p-5 my-12">
            <h2 className="mb-3 text-start"><span className="text-xl">My Arsenal</span> <span className="font-extrabold text-gray-950 dark:text-gray-100 text-3xl md:text-5xl mb-2 tracking-tight">Skills</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
                <div className="my-5 shadow-md dark:bg-zinc-900 bg-zinc-100 rounded-xl border-2 border-solid border-zinc-400 dark:border-zinc-700 hover:border-zinc-600 dark:hover:border-white  transform hover:scale-103 transition-transform px-5 pt-5">
                    <h3 className="text-gray-950 dark:text-gray-100 text-3xl md:text-3xl font-bold mb-8 tracking-tight">Languages and Frameworks</h3>
                    <div className="grid grid-cols-4 md:grid-cols-5 gap-12 my-4 lg:w-[500px]">
                        <div>
                            <img className="hover:scale-110 duration-200 transition cursor-pointer" src="/public/html-1.svg" alt="" />
                        </div>
                        <div>
                            <img className="hover:scale-110 duration-200 transition cursor-pointer" src="/public/css-3.svg" alt="" />
                        </div>
                        <div>
                            <img className="mt-5 hover:scale-110 duration-200 transition cursor-pointer" src="/public/tailwind-css-2 (1).svg" alt="" />
                        </div>
                        <div>
                            <img className="mt-2 hover:scale-110 duration-200 transition cursor-pointer" src="/public/bootstrap-5-1.svg" alt="" />
                        </div>
                        <div>
                            <img className="my-10 lg:my-8 hover:scale-110 duration-200 transition cursor-pointer" src="/public/daisyUI.svg" alt="" />
                        </div>
                        <div>
                            <img className="hover:scale-110 duration-200 transition cursor-pointer" src="/public/logo-javascript.svg" alt="" />
                        </div>
                        <div>
                            <img className="hover:scale-110 duration-200 transition cursor-pointer" src="/public/react-2.svg" alt="" />
                        </div>
                        <div>
                            <img className="hover:scale-110 duration-200 transition cursor-pointer" src="/public/nodejs-icon.svg" alt="" />
                        </div>
                        <div>
                            <img className="lg:w-48 w-40 hover:scale-110 duration-200 transition cursor-pointer" src="https://skillicons.dev/icons?i=express" />
                        </div>
                        <div>
                            <img className="lg:w-48 w-40 hover:scale-110 duration-200 transition cursor-pointer" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" />
                        </div>
                    </div>
                </div>
                <div className="my-5 shadow-md dark:bg-zinc-900 bg-zinc-100 rounded-xl border-2 border-solid border-zinc-400 dark:border-zinc-700 hover:border-zinc-600 dark:hover:border-white  transform hover:scale-103 transition-transform px-5 pt-5">
                    <h3 className="text-gray-950 dark:text-gray-100 text-3xl md:text-3xl font-bold mb-8 tracking-tight">Database and Tools</h3>
                    <div className="grid grid-cols-4 md:grid-cols-5 gap-12 my-4">
                        <div>
                            <img className="w-20 h-20 mt-2" src="/public/firebase-1.svg" alt="" />
                        </div>
                        <div>
                            <img className="mt-3" src="/public/mongodb-icon-1.svg" alt="" />
                        </div>
                        <div>
                            <img className="mt-3" src="/public/vitejs.svg" alt="" />
                        </div>
                        <div>
                            <img className="w-20 mt-2" src="https://skillicons.dev/icons?i=vercel" alt="Vercel" />
                        </div>
                        <div>
                            <img className="mt-2" src="/public/netlify.svg" alt="" />
                        </div>
                        <div>
                            <img className="w-20" src="https://skillicons.dev/icons?i=github" alt="GitHub"/>
                        </div>
                        <div>
                            <img className="w-20 h-20" src="/public/figma-icon.svg" alt="" />
                        </div>
                        <div>
                            <img className="" src="https://i.ibb.co/HqFnvrN/format-pix-removebg-preview.png" alt="" />
                        </div>
                        <div>
                            <img className="" src="/public/visual-studio-code-1.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;