

const Header = () => {
    return (
        <header className="bg-gray-900 text-white p-5">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl">Shoriful</h1>
          <nav>
            <a href="#projects" className="mx-2">Projects</a>
            <a href="#skills" className="mx-2">Skills</a>
            <a href="#contact" className="mx-2">Contact</a>
          </nav>
        </div>
      </header>
    );
};

export default Header;