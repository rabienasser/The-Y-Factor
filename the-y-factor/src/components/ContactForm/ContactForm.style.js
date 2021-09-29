import styled from "styled-components";

export const StyledForm = styled.form`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   width: 100%;

   label {
      margin-bottom: 0.5rem;
   }

   input {
      padding: 8px;
      margin-bottom: 1rem;
      width: 75%;

      &:focus {
         outline: none;
         border: 2px solid var(--third-color);
      }
   }

   textarea {
      width: 75%;
      height: 150px;

      &:focus {
         outline: none;
         border: 2px solid var(--third-color);
      }
   }

   button {
      margin: 2rem 0;
   }

   .error {
      color: red;
   }
`;

export const Section = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
`;

export const Name = styled.div`
   display: flex;
   width: 100%;

   input {
      margin-right: 1rem;
   }
`;
