import styled from "styled-components";

export const Container = styled.div`
   padding: 0rem 10rem;
   @media (max-width: 1100px) {
      padding: 0 6rem;
   }
   @media (max-width: 850px) {
      padding: 0 3rem;
   }
   @media (max-width: 550px) {
      padding: 0 1rem;
   }
`;

export const Description = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   margin: 0 auto;
   width: 65%;

   @media (max-width: 1100px) {
      width: 85%;
   }

   h1 {
      font-size: 3.5rem;
      margin-bottom: 1.5rem;
      @media (max-width: 850px) {
         font-size: 3rem;
      }
      @media (max-width: 550px) {
         font-size: 2.5rem;
      }
   }

   h2 {
      font-size: 2rem;
      margin-bottom: 1.5rem;
      font-weight: bolder;
      color: var(--third-color);
      @media (max-width: 850px) {
         font-size: 1.8rem;
      }
      @media (max-width: 550px) {
         font-size: 1.5rem;
      }
   }

   p {
      margin-bottom: 4rem;
      @media (max-width: 850px) {
         margin-bottom: 2rem;
      }
   }
`;

export const Boxes = styled.div`
   padding: 0 7rem;
   display: flex;
   margin-bottom: 7rem;
   text-align: center;

   @media (max-width: 1100px) {
      padding: 1rem;
      margin-bottom: 3rem;
   }

   @media (max-width: 875px) {
      flex-direction: column;
      align-items: center;
   }
`;
