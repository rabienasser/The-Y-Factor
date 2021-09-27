import styled from "styled-components";

export const Container = styled.div`
   padding: 0 10rem;
   margin-bottom: 7rem;

   h2 {
      text-align: center;
      margin-bottom: 3rem;
      font-size: 2rem;
      color: var(--third-color);
      font-weight: bolder;
   }
`;

export const Boxes = styled.div`
   display: flex;
`;

export const Box = styled.div`
   width: 33.33%;
   padding: 40px;
   margin: 0 1rem;
   box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
      rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
      rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;

   p {
      font-size: 1rem;
      font-style: italic;
      margin-bottom: 1rem;
   }

   h3 {
      color: var(--third-color);
      font-weight: bolder;
   }
`;
