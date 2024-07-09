import { Cursor, useTypewriter } from "react-simple-typewriter";


const Introduction = () => {
    // typewriter
    const [text] = useTypewriter({
        words: [ 'MERN Stack Developer','Front-End Developer', 'React.js Developer', 'Student'],
        loop: {},
        typeSpeed: 120,
        deleteSpeed: 80,
    });
    return (
        <section className="container lg:my-12 my-2 mx-auto">
            <div className="flex justify-between items-center gap-4 lg:flex-row flex-col">
                <div className="text-start">
                    <h1 className="text-white text-3xl md:text-5xl font-bold mb-2">Md. Shoriful  Islam</h1>
                    <p className="text-2xl mt-3 -mb-1 text-[#0788FF]"><span style={{ fontWeight: 'bold'}}>
                        {text}
                    </span><Cursor cursorColor='#fff' /></p>
                    <p className="text-white text-xl md:text-[20px] mt-2 lg:mt-5 tracking-wide">I’m a passionate web developer, creating my unique digital world step by step. I’m currently pursuing an undergraduate course in engineering while developing websites and playing games in free time.</p>
                    <p className="blue-text-gradient text-xl md:text-2xl mt-4 tracking-tight">Connect with me here! ⬇️</p>
                    <div className="lg:mt-8 mt-5 flex flex-wrap gap-5  lg:mb-16 mb-2">
                        <a href="https://github.com/Sa18-f" aria-label="GitHub" className="fill-white transition-transform hover:scale-150">
                            <svg width="30" height="30" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z" ></path>
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/in/md-shoriful-islam-169722316/" aria-label="LinkedIn" className="  transition-transform hover:scale-150 fill-white">
                            <svg width="30" height="30" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 1C1.44772 1 1 1.44772 1 2V13C1 13.5523 1.44772 14 2 14H13C13.5523 14 14 13.5523 14 13V2C14 1.44772 13.5523 1 13 1H2ZM3.05 6H4.95V12H3.05V6ZM5.075 4.005C5.075 4.59871 4.59371 5.08 4 5.08C3.4063 5.08 2.925 4.59871 2.925 4.005C2.925 3.41129 3.4063 2.93 4 2.93C4.59371 2.93 5.075 3.41129 5.075 4.005ZM12 8.35713C12 6.55208 10.8334 5.85033 9.67449 5.85033C9.29502 5.83163 8.91721 5.91119 8.57874 6.08107C8.32172 6.21007 8.05265 6.50523 7.84516 7.01853H7.79179V6.00044H6V12.0047H7.90616V8.8112C7.8786 8.48413 7.98327 8.06142 8.19741 7.80987C8.41156 7.55832 8.71789 7.49825 8.95015 7.46774H9.02258C9.62874 7.46774 10.0786 7.84301 10.0786 8.78868V12.0047H11.9847L12 8.35713Z" ></path>
                            </svg>
                        </a>
                        <a href="https://www.instagram.com/sazid_0/" aria-label="Instagram" className="transition-transform  fill-white hover:scale-150">
                            <svg width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                            </svg>
                        </a>
                        <a href="https://web.facebook.com/shoriful.islamsazid.75" aria-label="Facebook" className="transition-transform fill-white hover:scale-150">
                            <svg width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 8h-3v4h3v12h5v-12h3.656l.344-4h-4v-1.111c0-.899.089-1.222 1.197-1.222h2.803v-5h-3.999c-4.196 0-5.001 1.978-5.001 4.889v2.444z" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div>
                    <img className="rounded-xl transition-transform hover:scale-110" src="https://i.ibb.co/sKDPvLK/Whats-App-Image-2024-07-04-at-02-13-46-1ce1c470.jpg" alt="" />
                </div>
            </div>
        </section>
    );
};

export default Introduction;