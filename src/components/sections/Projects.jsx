const Projects = () => {
    return (
        <section className="flex flex-col p-4" id="projects">
            <h1 className="font-semibold text-larger text-center p-4">Projects</h1>
            <div className="grid grid-cols-2 gap-4">
                <div className="w-full border-2 border-solid border-secondary rounded-lg">
                    <img src="./images/projects/Mernstackblogs.png" alt="Mernstackblogs Image" className=" p-4" />
                    <h3 className="text-large font-normal px-4">Mernstackblogs</h3>
                    <p className="p-4">Mernstackblogs is a comprehensive platform for exploring, saving, and interacting with blog posts. Users can create profiles, manage articles, and apply as editors to contribute content. It includes features like secure posting, tags, commenting, view counts, pagination, and detailed word and read time analysis for an engaging user experience.</p>
                </div>
                <div className="w-full border-2 border-solid border-secondary rounded-lg">
                    <img src="./images/projects/QuizGenesis.png" alt="QuizGenesis Image" className=" p-4" />
                    <h3 className="text-large font-normal px-4">QuizGenesis</h3>
                    <p className="p-4">Quiz Genesis is an interactive quiz platform that allows users to sign up, log in, and manage their profiles. Users can create and attempt quizzes using join codes, view score pages, and track their quiz stats and leaderboards. With secure authentication, password validation, and hashing, it ensures a safe user experience.</p>
                </div>
                <div className="w-full border-2 border-solid border-secondary rounded-lg">
                    <img src="./images/projects/Employee Management System.png" alt="Employee Management System Image" className=" p-4" />
                    <h3 className="text-large font-normal px-4">Employee Management System</h3>
                    <p className="p-4">The Employee Management System is a robust application that allows users to log in and sign up. It offers comprehensive CRUD functionalities for managing employee data. Built with React.js for the frontend, using Bootstrap for styling, and powered by Node.js, Express, and Mongoose for the backend, it ensures a seamless user experience.</p>
                </div>
                <div className="w-full border-2 border-solid border-secondary rounded-lg">
                    <img src="./images/projects/ChatGPT Clone.png" alt="ChatGPT Clone Image" className=" p-4" />
                    <h3 className="text-large font-normal px-4">ChatGPT Clone</h3>
                    <p className="p-4">I created a ChatGPT clone frontend project that closely mimics the original design. Built using only HTML, CSS, and JavaScript, this project showcases my ability to replicate a modern, responsive layout without relying on React.js or any CSS libraries, focusing purely on the aesthetic aspects of the page.</p>
                </div>
                <div className="w-full border-2 border-solid border-secondary rounded-lg">
                    <img src="./images/projects/Diary App.png" alt="Diary App Image" className=" p-4" />
                    <h3 className="text-large font-normal px-4">Diary App</h3>
                    <p className="p-4">I developed a diary app using Nuxt.js and Vue.js, leveraging the Bulma framework for a responsive frontend. The backend is built with Node.js, Express, and MongoDB (Mongoose). Key features include user login and signup, along with the ability to add, edit, delete, and view diary entries seamlessly.</p>
                </div>
                <div className="w-full border-2 border-solid border-secondary rounded-lg">
                    <img src="./images/projects/SkillGauge.png" alt="SkillGauge Image" className=" p-4" />
                    <h3 className="text-large font-normal px-4">SkillGauge</h3>
                    <p className="p-4">Skill Gauge is an online examination system I built using React for the frontend, enhanced with React-Bootstrap for a responsive design. The backend is powered by Node.js, Express, and Mongoose. Users can create quiz tests and invite others to join using a unique join ID provided by the quiz creator.</p>
                </div>
            </div>
        </section>
    );
}

export default Projects;