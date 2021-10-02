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
   const [generalError, setGeneralError] = useState(false);
   const [error, setError] = useState({
      first: "",
      number: "",
      email: "",
      message: "",
   });

   const regExpEmail = RegExp(
      /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
   );
   const regExpName = RegExp(/^[a-zA-Z]+$/);
   const regExpNumber = RegExp(
      /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
   );

   const formValid = (error, first, email, message) => {
      let isValid = false;

      Object.values(error).forEach((val) => {
         if (val.length > 0) {
            isValid = false;
         } else {
            isValid = true;
         }
      });

      first.length > 0 ? (isValid = true) : (isValid = false);
      email.length > 0 ? (isValid = true) : (isValid = false);
      message.length > 5 ? (isValid = true) : (isValid = false);
      return isValid;
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      if (formValid(error, first, email, message)) {
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

         setGeneralError(false);
         setEmailSent(true);
      } else {
         setGeneralError(true);
      }
   };

   const formValChange = (e) => {
      e.preventDefault();
      const { name, value } = e.target;

      switch (name) {
         case "firstName":
            error.first = !regExpName.test(value)
               ? "Please enter valid name"
               : "";
            setFirst(value);
            break;
         case "lastName":
            setLast(value);
            break;
         case "number":
            error.number = !regExpNumber.test(value)
               ? "This is not a valid phone number"
               : "";
            setNumber(value);
            break;
         case "email":
            error.email = !regExpEmail.test(value)
               ? "Please enter valid email address"
               : "";
            setEmail(value);
            break;
         case "message":
            error.message =
               value.length > 5 ? "" : "Please tell me how I can help!";
            setMessage(value);
            break;
         default:
            break;
      }
   };

   return (
      <StyledForm onSubmit={handleSubmit}>
         <Section>
            <label htmlFor="name">Name*</label>
            <Name>
               <input
                  type="text"
                  placeholder="First"
                  className={error.first.length > 0 ? "inputError" : ""}
                  name="firstName"
                  onChange={formValChange}
                  value={emailSent ? "" : first}
               />
               <input
                  type="text"
                  placeholder="Last"
                  name="lastName"
                  onChange={formValChange}
                  value={emailSent ? "" : last}
               />
            </Name>
            {error.first.length > 0 && (
               <small className="errorMsg">{error.first}</small>
            )}
         </Section>
         <Section>
            <label htmlFor="number">Phone Number</label>
            <input
               type="tel"
               name="number"
               onChange={formValChange}
               value={emailSent ? "" : number}
            />
            {error.number.length > 0 && (
               <small className="errorMsg">{error.number}</small>
            )}
         </Section>
         <Section>
            <label htmlFor="email">Email*</label>
            <input
               type="email"
               name="email"
               className={error.email.length > 0 ? "inputError" : ""}
               onChange={formValChange}
               value={emailSent ? "" : email}
            />
            {error.email.length > 0 && (
               <small className="errorMsg">{error.email}</small>
            )}
         </Section>
         <Section>
            <label htmlFor="message">Message*</label>
            <textarea
               name="message"
               className={error.message.length > 0 ? "inputError" : ""}
               onChange={formValChange}
               value={emailSent ? "" : message}
            ></textarea>
            {error.message.length > 0 && (
               <small className="errorMsg">{error.message}</small>
            )}
         </Section>
         <Button type="submit" grey>
            Submit
         </Button>
         {emailSent && !generalError && (
            <span>
               Thank you for your message, I will be in touch in no time!
            </span>
         )}
         {generalError && (
            <span className="errorMsg">
               Please fill in all required fields*
            </span>
         )}
      </StyledForm>
   );
};

export default ContactForm;
