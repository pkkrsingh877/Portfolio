const Header = () => {
    return (
        <nav className="flex flex-row justify-between p-4 text-medium">
            <img src="/images/logos/dark.png" alt="dark Logo" className="w-[5rem]" />
            <div className="flex flex-row justify-around items-center gap-4 pr-4">
                <a href="/" className="hover:text-accent">Home</a>
                <a href="/projects" className="hover:text-accent">Projects</a>
                <a href="/skills" className="hover:text-accent">Skills</a>
                <a href="/contact" className="hover:text-accent">Contact Me</a>
            </div>
        </nav>
    );
}

export default Header;