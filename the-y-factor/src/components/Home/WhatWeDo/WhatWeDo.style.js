import styled from "styled-components";

export const Container = styled.div`
   padding: 0 10rem;
   margin-bottom: 7rem;
`;

export const Description = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   background: var(--third-color);
   color: var(--light-color);
   margin-bottom: 5rem;
   padding: 30px 0;

   div {
      width: 50%;
      text-align: left;

      h2 {
         margin-bottom: 1rem;
         font-size: 2.3rem;
      }

      p {
         font-size: 1rem;
      }
   }
`;
