import React, { useState } from "react";
import emailjs from "emailjs-com";
import { StyledForm } from "./ContactForm.style";

const ContactForm = () => {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [message, setMessage] = useState("");
   const [emailSent, setEmailSent] = useState(false);

   const isValidEmail = (email) => {
      const regex =
         /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return regex.test(String(email).toLowerCase());
   };

   const submit = () => {
      isValidEmail(email);

      if (name && email && message) {
         const serviceId = "service_nqexvun";
         const templateId = "template_awi0uin";
         const userId = "user_hxm9LVmlOrq85ProZYEwO";
         const templateParams = {
            name,
            email,
            message,
         };

         emailjs
            .send(serviceId, templateId, templateParams, userId)
            .then((response) => console.log(response))
            .then((error) => console.log(error));

         setName("");
         setEmail("");
         setMessage("");
         setEmailSent(true);
      } else if (!isValidEmail) {
         alert("Please enter a valid email address.");
      } else {
         alert("Please fill in all fields.");
      }
   };

   return (
      <StyledForm>
         <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
         />
         <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
         />
         <textarea
            placeholder="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
         ></textarea>
         <button onClick={submit}>Send Message</button>
         <span className={emailSent ? "visible" : null}>
            Thank you for your message, we will be in touch in no time!
         </span>
      </StyledForm>
   );
};

export default ContactForm;
