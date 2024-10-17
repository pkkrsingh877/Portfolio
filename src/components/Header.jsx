import { useState } from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="flex flex-col md:flex-row justify-between p-4 text-medium" id="home">

            <div className='flex justify-between items-center'>
                {/* Logo */}
                <img src="/images/logos/dark.png" alt="dark Logo" className="w-[5rem] hover:animate-ping" />

                {/* Hamburger / Close Icons Switch thing */}
                <div className="md:hidden flex items-center">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <i className="bi bi-x-lg"></i> : <i className="bi bi-list"></i>}
                    </button>
                </div>
            </div>

            {/* Links for Desktop */}
            <div className="hidden md:flex flex-row justify-around items-center gap-4 pr-4">
                <a href="#home" className="hover:text-accent">Home</a>
                <a href="#projects" className="hover:text-accent">Projects</a>
                <a href="#skills" className="hover:text-accent">Skills</a>
                <a href="#contact" className="hover:text-accent">Contact Me</a>
            </div>

            {isOpen && (
                <div className="flex flex-col justify-center items-center gap-4 p-4 md:hidden">
                    <a href="/" className="hover:text-accent">Home</a>
                    <a href="#projects" className="hover:text-accent">Projects</a>
                    <a href="#skills" className="hover:text-accent">Skills</a>
                    <a href="#contact" className="hover:text-accent">Contact Me</a>
                </div>
            )}
        </nav>
    );
}

export default Header;