import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { Button } from "../../styles";
import { StyledForm, Section, Name } from "./ContactForm.style";

const ContactForm = () => {
   const [first, setFirst] = useState("");
   const [last, setLast] = useState("");
   const [number, setNumber] = useState("");
   const [email, setEmail] = useState("");
   const [message, setMessage] = useState("");
   const [emailSent, setEmailSent] = useState(false);
   const [error, setError] = useState(false);
   const [firstError, setFirstError] = useState(false);

   const isValidEmail = (email) => {
      const regex =
         /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return regex.test(String(email).toLowerCase());
   };

   const handleSubmit = (e) => {
      isValidEmail(email);

      if (first && last && email && message && number) {
         const serviceId = "service_nqexvun";
         const templateId = "template_awi0uin";
         const userId = "user_hxm9LVmlOrq85ProZYEwO";
         const templateParams = {
            first,
            last,
            number,
            email,
            message,
         };

         emailjs
            .send(serviceId, templateId, templateParams, userId)
            .then((response) => console.log(response))
            .then((error) => console.log(error));

         setFirst("");
         setLast("");
         setNumber("");
         setEmail("");
         setMessage("");
         setEmailSent(true);
      } else {
         setError(true);
      }

      e.preventDefault();
   };

   useEffect(() => {
      setTimeout(() => {
         setError(false);
      }, 8000);
   }, [error]);

   // const Test = ({ type, placeholder, value, onChange, error, errorMsg, state }) => {
   //    return (
   //       <div>
   //          <input
   //             type={type}
   //             placehodler={placeholder}
   //             value={value}
   //             onChange={onChange}
   //          />
   //          {(error && state === '') && <p>{errorMsg}</p>}
   //       </div>
   //    );
   // };

   return (
      <StyledForm onSubmit={handleSubmit}>
         <Section>
            <label htmlFor="name">Name</label>
            <Name>
               <input
                  type="text"
                  placeholder="First"
                  value={first}
                  onChange={(e) => setFirst(e.target.value)}
                  required
               />
               <input
                  type="text"
                  placeholder="Last"
                  value={last}
                  onChange={(e) => setLast(e.target.value)}
                  required
               />
            </Name>
         </Section>
         <Section>
            <label htmlFor="number">Phone Number</label>
            <input
               type="tel"
               value={number}
               onChange={(e) => setNumber(e.target.value)}
            />
         </Section>
         <Section>
            <label htmlFor="email">Email</label>
            <input
               type="email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               required
            />
         </Section>
         <Section>
            <label htmlFor="message">Message</label>
            <textarea
               value={message}
               onChange={(e) => setMessage(e.target.value)}
               required
            ></textarea>
         </Section>
         <Button type="submit" grey>
            Submit
         </Button>
         {emailSent && (
            <span>
               Thank you for your message, I will be in touch in no time!
            </span>
         )}
         {error && <span>error</span>}
      </StyledForm>
   );
};

export default ContactForm;
