import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";

const Main = () => {
    return (
        <main>
            <hr className="w-full border-1 border-solid border-secondary" />
            <Hero />
            <hr className="w-full border-1 border-solid border-secondary" />
            <Projects />
            <hr className="w-full border-1 border-solid border-secondary" />
            <Skills />
            <hr className="w-full border-1 border-solid border-secondary" />
            <Contact />
            <hr className="w-full border-1 border-solid border-secondary" />
        </main>
    );
}

export default Main;