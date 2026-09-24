import {useState} from "react";
function Contact() {
  
    const [name, setName]= useState("");
    const [email, setEmail] = useState("");
    const [message , setMessage] = useState("");
    const [submitted , setSubmitted] = useState(false);
  
    function handleSubmit (e) {
      e.preventDefault ();
      console.log(name);
      console.log(email);
      console.log(message);
     
      setSubmitted(true);
      
      setName("");
      setEmail("");
      setMessage("");
    }
    return (
    <section className="contact" id="contact">
      <h2 className="contact-title">Contact Us</h2>

      <p className="contact-text">
        Have a project in mind? Let's talk!
      </p>
      {submitted && <p>Thanks! Your message has been received.</p>}

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e)=> setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}
export default Contact;