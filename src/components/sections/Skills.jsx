import Slider from "../utilities/Slider";

const Skills = () => {
    return (
        <section className="flex flex-col p-4" id="skills">
            <h1 className="font-semibold text-larger text-center p-4">Skills</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="flex flex-row justify-between items-center w-full">
                    <h3 className="text-medium font-normal px-4">HTML</h3>
                    <Slider value="98" />
                </div>
                <div className="flex flex-row justify-between items-center w-full">
                    <h3 className="text-medium font-normal px-4">CSS</h3>
                    <Slider value="80" />
                </div>
                <div className="flex flex-row justify-between items-center w-full">
                    <h3 className="text-medium font-normal px-4">JavaScript</h3>
                    <Slider value="90" />
                </div>
                <div className="flex flex-row justify-between items-center w-full">
                    <h3 className="text-medium font-normal px-4">React.js</h3>
                    <Slider value="75" />
                </div>
                <div className="flex flex-row justify-between items-center w-full">
                    <h3 className="text-medium font-normal px-4">Vue.js</h3>
                    <Slider value="50" />
                </div>
                <div className="flex flex-row justify-between items-center w-full">
                    <h3 className="text-medium font-normal px-4">Node.js</h3>
                    <Slider value="85" />
                </div>
                <div className="flex flex-row justify-between items-center w-full">
                    <h3 className="text-medium font-normal px-4">Express.js</h3>
                    <Slider value="87" />
                </div>
                <div className="flex flex-row justify-between items-center w-full">
                    <h3 className="text-medium font-normal px-4">MongoDB</h3>
                    <Slider value="80" />
                </div>
                <div className="flex flex-row justify-between items-center w-full">
                    <h3 className="text-medium font-normal px-4">SQL</h3>
                    <Slider value="76" />
                </div>
                <div className="flex flex-row justify-between items-center w-full">
                    <h3 className="text-medium font-normal px-4">Git</h3>
                    <Slider value="72" />
                </div>
                <div className="flex flex-row justify-between items-center w-full">
                    <h3 className="text-medium font-normal px-4">GitHub</h3>
                    <Slider value="84" />
                </div>
                <div className="flex flex-row justify-between items-center w-full">
                    <h3 className="text-medium font-normal px-4">Bulma</h3>
                    <Slider value="80" />
                </div>
                <div className="flex flex-row justify-between items-center w-full">
                    <h3 className="text-medium font-normal px-4">Material UI</h3>
                    <Slider value="69" />
                </div>
                <div className="flex flex-row justify-between items-center w-full">
                    <h3 className="text-medium font-normal px-4">Bootstrap</h3>
                    <Slider value="90" />
                </div>
                <div className="flex flex-row justify-between items-center w-full">
                    <h3 className="text-medium font-normal px-4">Next.js</h3>
                    <Slider value="75" />
                </div>
                <div className="flex flex-row justify-between items-center w-full">
                    <h3 className="text-medium font-normal px-4">Nuxt.js</h3>
                    <Slider value="70" />
                </div>
                <div className="flex flex-row justify-between items-center w-full">
                    <h3 className="text-medium font-normal px-4">Python</h3>
                    <Slider value="75" />
                </div>
                <div className="flex flex-row justify-between items-center w-full">
                    <h3 className="text-medium font-normal px-4">Flask</h3>
                    <Slider value="70" />
                </div>
            </div>
        </section>
    );
}

export default Skills;