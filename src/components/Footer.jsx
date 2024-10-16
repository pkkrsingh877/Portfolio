const Footer = () => {
    return (
        <footer className="text-text p-4 text-center mt-10">
            <div className="container mx-auto">
                <p>&copy; 2024 Prabhat Kumar. All rights reserved.</p>
                <div className="flex justify-center space-x-4 mt-2">
                    <a href="https://github.com/pkkrsingh877" className="hover:text-accent text-large" aria-label="GitHub" target="_blank">
                        <i className="bi bi-github"></i>
                    </a>
                    <a href="https://x.com/rapidbuzz" className="hover:text-accent text-large" aria-label="Twitter" target="_blank">
                        <i className="bi bi-twitter"></i>
                    </a>
                    <a href="https://linkedin.com/in/pkkrsingh877" className="hover:text-accent text-large" aria-label="LinkedIn" target="_blank">
                        <i className="bi bi-linkedin"></i>
                    </a>
                    <a href="https://www.youtube.com/@contentkingprabhat" className="hover:text-accent text-large" aria-label="YouTube" target="_blank">
                        <i className="bi bi-youtube"></i>
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100008368487776" className="hover:text-accent text-large" aria-label="Facebook" target="_blank">
                        <i className="bi bi-facebook"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
