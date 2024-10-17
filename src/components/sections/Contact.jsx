const Contact = () => {
    return (
        <section className="w-full flex flex-col p-4" id="contact">
            <h1 className="font-semibold text-larger text-center p-4">Contact</h1>
            <form className="w-full flex flex-col gap-4 px-4 md:px-24 lg:px-36 justify-center items-center" action="mailto:prabhatdie@gmail.com" method="post" encType="text/plain">
                <input type="text" className="w-full p-4 rounded text-secondary" id="name" name="name" placeholder="Your Name" required />
                <input type="email" className="w-full p-4 rounded text-secondary" id="email" name="email" placeholder="Your Email" required />
                <input type="text" className="w-full p-4 rounded text-secondary" id="subject" name="subject" placeholder="Subject" required />
                <textarea className="w-full p-4 rounded text-secondary" id="message" name="message" rows="5" placeholder="Your Message" required></textarea>
                <button type="submit" className="border-2 border-solid border-text inline w-24 p-2 text-center rounded">Send Message</button>
            </form>
        </section>
    );
}

export default Contact;