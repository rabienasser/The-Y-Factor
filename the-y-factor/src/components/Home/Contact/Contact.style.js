import styled from "styled-components";

export const Container = styled.div`
   padding: 0 10rem;
   height: 45rem;
   display: flex;
   align-items: flex-start;

   @media (max-width: 1100px) {
      padding: 0 6rem;
   }

   @media (max-width: 850px) {
      padding: 0 2rem;
      flex-direction: column;
      height: auto;
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
   width: 50%;
   height: 100%;
   padding: 1.5rem;

   @media (max-width: 850px) {
      width: 100%;
      padding: 1rem;
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
   justify-content: flex-start;
   align-items: center;
   width: 50%;
   height: 100%;
   padding: 1.5rem;

   @media (max-width: 850px) {
      width: 100%;
   }
`;

export const Social = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   margin-bottom: 2rem;
   width: 100%;
   height: 20%;

   h2 {
      text-align: center;
   }

   ul {
      display: flex;

      li {
         padding: 0 1rem;
      }

      .icon {
         font-size: 2rem;
         color: var(--dark-grey);
         transition: all 0.3s ease;

         &:hover {
            color: var(--third-color);
         }
      }
   }
`;

export const StyledImage = styled.div`
   text-align: center;
   width: 100%;
   height: 80%;
   img {
      object-fit: cover;
      border-radius: 5px;
      overflow: hidden;
      width: 80%;
      height: 100%;
   }
`;
