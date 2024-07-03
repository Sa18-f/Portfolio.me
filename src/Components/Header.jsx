// import { useState } from "react";


const Header = () => {
    // const [dark, setDark] = useState(true);

    // // Function to toggle the theme
    // const toggleTheme = () => {
    //     setDark(prevTheme => !prevTheme);
    //     if (dark) {
    //         document.querySelector('html').setAttribute('data-theme', 'dim');
    //     }
    //     else {
    //         document.querySelector('html').setAttribute('data-theme', 'light');
    //     }
    // };
    return (
        <header className="text-white">
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-32 p-2 shadow bg-gray-800">
                            <li className="">
                                <a href="#home" className="mx-2 font-bold">Home</a>
                                <a href="#projects" className="mx-2 font-bold">Projects</a>
                                <a href="#skills" className="mx-2 font-bold">Skills</a>
                                <a href="#contact" className="mx-2 font-bold">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-2xl -ml-6 lg:-ml-2">Shoriful Islam</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <nav className="bg-gray-700 rounded-lg p-3">
                            <a href="#home" className="mx-2  font-bold">Home</a>
                            <a href="#projects" className="mx-2  font-bold">Projects</a>
                            <a href="#skills" className="mx-2 font-bold">Skills</a>
                            <a href="#contact" className="mx-2  font-bold">Contact</a>
                        </nav>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div>
                        <img className="w-12 h-12 rounded-full"
                            alt="Tailwind CSS Navbar component"
                            src="https://i.ibb.co/BGcb8P8/Whats-App-Image-2024-07-04-at-02-22-53-994f0702.jpg" />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;