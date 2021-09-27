import styled from "styled-components";

export const About = styled.div`
   height: 60vh;
   padding: 0rem 10rem;
   display: flex;
   align-items: center;
   background: var(--dark-blue);
   margin-bottom: 9rem;
`;

export const Description = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   color: var(--light-color);
   width: 50%;
   height: 100%;
   h1 {
      font-size: 3.5rem;
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
   justify-content: center;

   img {
      position: absolute;
      bottom: -20%;
      object-fit: cover;
      max-height: 100%;
      max-width: 100%;
   }
`;
