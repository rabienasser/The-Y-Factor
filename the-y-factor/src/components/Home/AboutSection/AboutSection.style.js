import styled from "styled-components";

export const About = styled.div`
   position: relative;
   height: 60vh;
   padding: 0rem 13rem;
   display: flex;
   align-items: center;
   background: var(--dark-blue);
   margin-bottom: 9rem;

   @media (max-width: 1100px) {
      padding: 0 6rem;
   }
   @media (max-width: 850px) {
      padding: 0 3rem;
   }
   @media (max-width: 750px) {
      flex-direction: column;
      text-align: center;
      padding: 3rem 0;
      margin-bottom: 15rem;
   }
   @media (max-width: 550px) {
      margin-bottom: 12rem;
   }
   @media (device-width: 375px) and (device-height: 812px) {
      margin-bottom: 5rem;
   }
   @media (device-width: 1024px) and (device-height: 1366px) {
      margin-bottom: 15rem;
   }
`;

export const Description = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   color: var(--light-color);
   width: 50%;
   height: 100%;
   @media (max-width: 750px) {
      margin-bottom: 2rem;
      width: 100%;
   }
   h1 {
      font-size: 3rem;

      @media (max-width: 1160px) {
         font-size: 2.5rem;
      }

      @media (max-width: 850px) {
         font-size: 2rem;
      }
   }

   h1,
   p {
      margin-bottom: 1rem;
   }

   p {
      @media (max-width: 1160px) {
         font-size: 1rem;
      }
   }

   button {
      max-width: 40%;
      @media (max-width: 750px) {
         margin: 0 auto;
      }
   }

   span {
      color: var(--third-color);
   }
`;

export const Image = styled.div`
   position: relative;
   width: 50%;
   height: 100%;
   display: flex;
   /* justify-content: center; */
   justify-content: flex-end;

   img {
      position: absolute;
      bottom: -20%;
      object-fit: cover;
      max-height: 100%;
      max-width: 100%;

      @media (max-width: 750px) {
         position: static;
         width: 100%;
      }
   }
`;
