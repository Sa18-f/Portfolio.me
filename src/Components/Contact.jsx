

const Contact = () => {
    return (
        <section id="contact" className="container mx-auto p-5">
            <h2 className="text-3xl mb-3">Contact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <h3 className="text-2xl mb-2">Contact Me</h3>
                    <form className="flex flex-col">
                        <label className="mb-2">Name:</label>
                        <input type="text" className="p-2 mb-2 border border-gray-300 rounded" />
                        <label className="mb-2">Email:</label>
                        <input type="email" className="p-2 mb-2 border border-gray-300 rounded" />
                        <label className="mb-2">Message:</label>
                        <textarea className="p-2 mb-2 border border-gray-300 rounded"></textarea>
                        <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700">Send Message</button>
                    </form>
                </div>
                <div>
                    <h3 className="text-2xl mb-2">Contact Information</h3>
                    <p>Email: <a href="mailto:shivaraj@example.com" className="text-blue-500 hover:underline">shivaraj@example.com</a></p>
                    <p>LinkedIn: <a href="https://linkedin.com" className="text-blue-500 hover:underline">LinkedIn</a></p>
                    <p>GitHub: <a href="https://github.com" className="text-blue-500 hover:underline">GitHub</a></p>
                </div>
            </div>
        </section>
    );
};

export default Contact;