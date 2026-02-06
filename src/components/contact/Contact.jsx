import { useState } from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import location_icon from "../../assets/location-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import white_arrow from "../../assets/white-arrow.png";
function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;
    console.log("Vite Key Status:", accessKey ? "Loaded" : "Undefined");
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", accessKey);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      setResult("Error");
      console.log("Error:", data.error);
    }
  };
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          {" "}
          Send us a message <img src={msg_icon} alt="" />
        </h3>
        <p>
          Feel free to reach out through contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>
        <ul>
          <li>
            <img src={mail_icon} />
            Contact @JoeSigma.dev
          </li>
          <li>
            <img src={phone_icon} />
            +2348026923477
          </li>
          <li>
            <img src={location_icon} />
            8, Egbeda Street, Leeki, Lagos
          </li>
        </ul>
      </div>

      <div className="contact-col">
        <form onSubmit={onSubmit} className="contact-form">
          <label>Your name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label>Phone number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your mobile number"
            required
          />
          <label>Write your messages here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Send Message
            <img src={white_arrow} />
          </button>
        </form>
        <p>{result}</p>
      </div>
    </div>
  );
}

export default Contact;
