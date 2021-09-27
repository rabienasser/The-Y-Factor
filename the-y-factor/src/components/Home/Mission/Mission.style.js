import styled from "styled-components";

export const Container = styled.div`
   padding: 0 10rem;
   height: 70vh;
   margin-bottom: 7rem;
   display: flex;
   background: var(--dark-blue);
   color: var(--light-color);
`;

export const MissionContent = styled.div`
   display: flex;
   align-items: center;
   padding: 40px;
`;

export const Image = styled.div`
   width: 50%;
   height: 100%;
   display: flex;
   align-items: center;
   justify-content: center;

   img {
      object-fit: cover;
      width: 75%;
      height: 90%;
   }
`;

export const Statement = styled.div`
   width: 50%;
   height: 100%;
   display: flex;
   flex-direction: column;
   justify-content: center;

   h2 {
      margin-bottom: 1rem;
      font-size: 2.7rem;
      color: var(--third-color);
   }

   p {
      font-size: 1rem;
   }
`;
