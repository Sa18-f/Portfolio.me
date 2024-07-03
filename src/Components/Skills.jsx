

const Skills = () => {
    return (
        <section id="skills" className="container mx-auto p-5">
            <h2 className="text-3xl mb-3">Skill</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <h3 className="text-2xl mb-2">Languages and Frameworks</h3>
                    <p>HTML, CSS, JavaScript, React, Node.js, Express, etc.</p>
                </div>
                <div>
                    <h3 className="text-2xl mb-2">Database and Tools</h3>
                    <p>MongoDB, MySQL, Git, etc.</p>
                </div>
            </div>
        </section>
    );
};

export default Skills;