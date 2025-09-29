function contactform() {
  return (
    <div className="contact-form">
      <h2>Contact Me</h2>
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="Your Name" className="p-2 rounded border border-gray-300" />
        <input type="email" placeholder="Your Email" className="p-2 rounded border border-gray-300" />
        <textarea placeholder="Your Message" className="p-2 rounded border border-gray-300"></textarea>
        <button type="submit" className="bg-purple-600 text-white p-2 rounded hover:bg-purple-700 transition">Send Message</button>
      </form>
    </div>
  )
}

export default contactform