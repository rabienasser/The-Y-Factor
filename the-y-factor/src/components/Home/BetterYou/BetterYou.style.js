import styled from "styled-components";

export const Container = styled.div`
   padding: 0rem 10rem;
`;

export const Description = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   margin: 0 auto;
   width: 65%;

   h1 {
      font-size: 3.5rem;
      margin-bottom: 1.5rem;
   }

   h2 {
      font-size: 2rem;
      margin-bottom: 1.5rem;
      font-weight: bolder;
      color: var(--third-color);
   }

   p {
      margin-bottom: 4rem;
   }
`;

export const Boxes = styled.div`
   padding: 0 7rem;
   display: flex;
   margin-bottom: 7rem;
`;
