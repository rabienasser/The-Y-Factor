import styled from "styled-components";

export const Container = styled.div`
   padding: 0 10rem;
   display: flex;
   align-items: center;

   @media (max-width: 1100px) {
      padding: 0 6rem;
   }

   @media (max-width: 850px) {
      padding: 0 2rem;
   }

   @media (max-width: 750px) {
      flex-direction: column-reverse;
   }

   h2 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
      @media (max-width: 850px) {
         font-size: 2rem;
      }
   }
`;

export const Form = styled.div`
   display: flex;
   flex-direction: column;
   height: 100%;
   width: 50%;
   padding: 1.5rem;

   @media (max-width: 850px) {
      width: 75%;
      padding: 1rem;
   }
   @media (max-width: 750px) {
      width: 100%;
   }

   h1 {
      font-size: 3rem;
      margin-bottom: 1rem;
   }

   p {
      margin-bottom: 2rem;
   }
`;

export const ContactInfo = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   height: 100%;
   width: 50%;
   padding: 1.5rem;

   @media (max-width: 750px) {
      width: 100%;
   }
`;

export const Social = styled.div`
   width: 100%;
   margin-bottom: 4rem;
   @media (max-width: 1200px) {
      width: 50%;
   }
   @media (max-width: 850px) {
      width: 100%;
   }
   @media (max-width: 750px) {
      width: 50%;
   }

   h2 {
      text-align: center;
      @media (max-width: 1200px) {
         text-align: left;
      }
      @media (max-width: 750px) {
         text-align: center;
      }
   }

   ul {
      display: flex;
      justify-content: center;
      @media (max-width: 1200px) {
         justify-content: flex-start;
      }
      @media (max-width: 750px) {
         justify-content: center;
      }

      li {
         padding: 0 1rem;
         @media (max-width: 1200px) {
            padding: 0;
            padding-right: 1.5rem;
         }
         @media (max-width: 750px) {
            padding: 0 1rem;
         }
      }

      .icon {
         font-size: 2rem;
         color: var(--dark-grey);
         transition: all 0.3s ease;

         &:hover {
            font-size: 2.2rem;
            color: var(--third-color);
         }
      }
   }
`;

export const ContactDetails = styled.div`
   display: flex;
   text-align: center;
   width: 100%;

   @media (max-width: 1200px) {
      flex-direction: column;
      align-items: center;
   }
   @media (max-width: 750px) {
      flex-direction: row;
   }
   @media (max-width: 500px) {
      flex-direction: column;
   }

   div {
      width: 50%;

      @media (max-width: 1200px) {
         text-align: left;
         margin-bottom: 2rem;
      }
      @media (max-width: 850px) {
         width: 100%;
      }
      @media (max-width: 750px) {
         text-align: center;
      }
   }
`;

export const Footer = styled.div`
   background: var(--dark-blue);
   width: 100%;
   height: 10vh;
`;
