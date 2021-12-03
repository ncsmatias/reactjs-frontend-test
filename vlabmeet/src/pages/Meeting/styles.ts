import styled from "styled-components";

export const Container = styled.div`
background: #333333;
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center; 
`;

export const Content = styled.div`  
display: flex;
width: 100vw;
height: 100vh;
`;

export const UsersContainer = styled.div`
width: 75vw;
height: 80vh;
background: #1d1d1d;
display: flex;
flex-direction: row;
margin: 0.5rem;
border-radius: 1rem;
align-items: center;
justify-content: space-evenly;
flex-wrap: wrap;
`;

export const OwnerContainer = styled.div`
height: 80vh;
width: 23vw;
margin: 0.5rem;
border-radius: 1rem;
background: #1d1d1d;
display: flex;
flex-direction: column;
align-items: center;
`;

export const ConfigContainer = styled.div`
width: 100vw;
height: 20vh;
background: #1d1d1d;
display: flex;
justify-content: center;
align-items: center;
`;