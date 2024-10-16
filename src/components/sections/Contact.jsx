const Contact = () => {
    return (
        <section className="flex flex-col p-4" id="contact">
            <h1 className="font-semibold text-larger text-center p-4">Contact</h1>
            <form className="grid grid-cols-1 gap-4 place-items-center" action="mailto:prabhatdie@gmail.com" method="post" enctype="text/plain">
                <input type="text" className="font-normal text-medium p-4 rounded-xl" id="name" name="name" placeholder="Your Name" required />
                <input type="email" className="font-normal text-medium p-4 rounded-xl" id="email" name="email" placeholder="Your Email" required />
                <input type="text" className="font-normal text-medium p-4 rounded-xl" id="subject" name="subject" placeholder="Subject" required />
                <textarea className="font-normal text-medium p-4 rounded-xl" id="message" name="message" rows="5" placeholder="Your Message" required></textarea>
                <button type="submit" className="bg-accent inline w-24 text-center rounded-xl">Send Message</button>
            </form>
        </section>
    );
}

export default Contact;