import { useRef } from "react";
import emailjs from '@emailjs/browser';

function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_7xc2j2g',       // ✅ Your Service ID
      'template_rdsie4v',     // ✅ Your Template ID
      form.current,           // ✅ Reference to the form
      'TL_Ku4xL0Gwv67Z2x'     // ✅ Your PUBLIC API key
    )
    .then((result) => {
      console.log('✅ Email sent successfully!', result.text);
      form.current.reset(); // Reset the form after sending
    })
    .catch((error) => {
      console.error('❌ Failed to send email:', error.text || error);
    });
  };

  return (
    <div className="contact-form">
      <h2>Contact Me</h2>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col gap-4"
      >
        <input
          type="text"
          name="from_name" // ✅ Must match EmailJS template
          placeholder="Your Name"
          className="p-2 rounded border border-gray-300"
          required
        />
        <input
          type="email"
          name="user_email" // ✅ Must match EmailJS template
          placeholder="Your Email"
          className="p-2 rounded border border-gray-300"
          required
        />
        <textarea
          name="message" // ✅ Must match EmailJS template
          placeholder="Your Message"
          className="p-2 rounded border border-gray-300"
          required
        ></textarea>
        <button
          type="submit"
          className="submit bg-purple-600 text-white p-2 rounded hover:bg-purple-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
