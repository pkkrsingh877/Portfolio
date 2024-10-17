const Hero = () => {
    return (
        <section className="flex flex-col lg:flex-row-reverse p-4 items-center">
            <div className="">
                <img src="./images/profile-picture.png" alt="Prabhat Kumar's Profile Picture" className="w-auto max-w-[400px] rounded-[50%] p-12" />
            </div>
            <div className="p-12">
                <h1 className="text-larger md:text-largest font-extrabold">Hi, I'm Prabhat Kumar!</h1>
                <h2 className="text-large md:text-larger font-light p-2">A Passionate Web Developer</h2>
                <p className="md:text-medium font-normal">I specialize in creating beautiful and functional websites using the latest technologies. With a focus on user experience and responsive design, I strive to deliver seamless digital experiences that exceed expectations. Let's build something amazing together!</p>
            </div>
        </section>
    );
}

export default Hero;