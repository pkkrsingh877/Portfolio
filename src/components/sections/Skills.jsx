const Skills = () => {
    return (
        <section className="flex flex-col p-4" id="skills">
            <h1 className="font-semibold text-larger text-center p-4">Skills</h1>
            <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-row justify-between items-center w-full">
                    <h3 className="text-medium font-normal px-4">HTML</h3>
                    <input id="disabled-range" type="range" value="98" class="w-[50%] h-2 bg-accent rounded-lg appearance-none cursor-pointer" disabled />
                </div>
                <div className="flex flex-row justify-between items-center w-full">
                    <h3 className="text-medium font-normal px-4">CSS</h3>
                    <input id="disabled-range" type="range" value="80" class="w-[50%] h-2 bg-accent rounded-lg appearance-none cursor-pointer" disabled />
                </div>
                <div className="flex flex-row justify-between items-center w-full">
                    <h3 className="text-medium font-normal px-4">JavaScript</h3>
                    <input id="disabled-range" type="range" value="90" class="w-[50%] h-2 bg-accent rounded-lg appearance-none cursor-pointer" disabled />
                </div>
                <div className="flex flex-row justify-between items-center w-full">
                    <h3 className="text-medium font-normal px-4">React.js</h3>
                    <input id="disabled-range" type="range" value="75" class="w-[50%] h-2 bg-accent rounded-lg appearance-none cursor-pointer" disabled />
                </div>
                <div className="flex flex-row justify-between items-center w-full">
                    <h3 className="text-medium font-normal px-4">Vue.js</h3>
                    <input id="disabled-range" type="range" value="50" class="w-[50%] h-2 bg-accent rounded-lg appearance-none cursor-pointer" disabled />
                </div>
                <div className="flex flex-row justify-between items-center w-full">
                    <h3 className="text-medium font-normal px-4">Node.js</h3>
                    <input id="disabled-range" type="range" value="85" class="w-[50%] h-2 bg-accent rounded-lg appearance-none cursor-pointer" disabled />
                </div>
                <div className="flex flex-row justify-between items-center w-full">
                    <h3 className="text-medium font-normal px-4">Express.js</h3>
                    <input id="disabled-range" type="range" value="90" class="w-[50%] h-2 bg-accent rounded-lg appearance-none cursor-pointer" disabled />
                </div>
                <div className="flex flex-row justify-between items-center w-full">
                    <h3 className="text-medium font-normal px-4">MongoDB</h3>
                    <input id="disabled-range" type="range" value="80" class="w-[50%] h-2 bg-accent rounded-lg appearance-none cursor-pointer" disabled />
                </div>
                <div className="flex flex-row justify-between items-center w-full">
                    <h3 className="text-medium font-normal px-4">SQL</h3>
                    <input id="disabled-range" type="range" value="90" class="w-[50%] h-2 bg-accent rounded-lg appearance-none cursor-pointer" disabled />
                </div>
                <div className="flex flex-row justify-between items-center w-full">
                    <h3 className="text-medium font-normal px-4">Git</h3>
                    <input id="disabled-range" type="range" value="85" class="w-[50%] h-2 bg-accent rounded-lg appearance-none cursor-pointer" disabled />
                </div>
                <div className="flex flex-row justify-between items-center w-full">
                    <h3 className="text-medium font-normal px-4">GitHub</h3>
                    <input id="disabled-range" type="range" value="80" class="w-[50%] h-2 bg-accent rounded-lg appearance-none cursor-pointer" disabled />
                </div>
                <div className="flex flex-row justify-between items-center w-full">
                    <h3 className="text-medium font-normal px-4">Bulma</h3>
                    <input id="disabled-range" type="range" value="90" class="w-[50%] h-2 bg-accent rounded-lg appearance-none cursor-pointer" disabled />
                </div>
                <div className="flex flex-row justify-between items-center w-full">
                    <h3 className="text-medium font-normal px-4">Material UI</h3>
                    <input id="disabled-range" type="range" value="70" class="w-[50%] h-2 bg-accent rounded-lg appearance-none cursor-pointer" disabled />
                </div>
                <div className="flex flex-row justify-between items-center w-full">
                    <h3 className="text-medium font-normal px-4">Bootstrap</h3>
                    <input id="disabled-range" type="range" value="90" class="w-[50%] h-2 bg-accent rounded-lg appearance-none cursor-pointer" disabled />
                </div>
                <div className="flex flex-row justify-between items-center w-full">
                    <h3 className="text-medium font-normal px-4">Next.js</h3>
                    <input id="disabled-range" type="range" value="80" class="w-[50%] h-2 bg-accent rounded-lg appearance-none cursor-pointer" disabled />
                </div>
                <div className="flex flex-row justify-between items-center w-full">
                    <h3 className="text-medium font-normal px-4">Nuxt.js</h3>
                    <input id="disabled-range" type="range" value="50" class="w-[50%] h-2 bg-accent rounded-lg appearance-none cursor-pointer" disabled />
                </div>
                <div className="flex flex-row justify-between items-center w-full">
                    <h3 className="text-medium font-normal px-4">Python</h3>
                    <input id="disabled-range" type="range" value="75" class="w-[50%] h-2 bg-accent rounded-lg appearance-none cursor-pointer" disabled />
                </div>
                <div className="flex flex-row justify-between items-center w-full">
                    <h3 className="text-medium font-normal px-4">Flask</h3>
                    <input id="disabled-range" type="range" value="75" class="w-[50%] h-2 bg-accent rounded-lg appearance-none cursor-pointer" disabled />
                </div>
            </div>
        </section>
    );
}

export default Skills;