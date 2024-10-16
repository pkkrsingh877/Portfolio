const Hero = () => {
    return (
        <section className="flex flex-row p-4">
            <div className="p-12">
                <h1 className="text-extraLarge font-extrabold">Hi, I'm Prabhat Kumar!</h1>
                <h2 className="text-medium font-light p-2">A Passionate Web Developer</h2>
                <p className="text-small font-normal">I specialize in creating beautiful and functional websites using the latest technologies. With a focus on user experience and responsive design, I strive to deliver seamless digital experiences that exceed expectations. Let's build something amazing together!</p>
            </div>
            <div className="relative">
                <img src="./images/profile-picture.png" alt="Prabhat Kumar's Profile Picture" className="w-[100%] rounded-[50%] hover:" />
                <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 rounded-[50%] transition-opacity duration-300 flex justify-center items-center text-text font-extrabold text-large">Prabhat Kumar</div>
            </div>
        </section>
    );
}

export default Hero;