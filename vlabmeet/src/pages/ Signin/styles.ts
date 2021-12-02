import styled from "styled-components";

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
background: linear-gradient(
  90deg,
  rgba(52, 46, 80, 1) 0%,
  rgba(116, 77, 166, 1) 100%
);
width: 100vw;
height: 100vh;
`;

export const Content = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 50%;
width: 50%;
background-color: whitesmoke;
border-radius: 0.4rem;
`;