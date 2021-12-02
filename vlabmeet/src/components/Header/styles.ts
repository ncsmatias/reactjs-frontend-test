import styled from "styled-components";

export const Container = styled.div`
background: linear-gradient(
  90deg,
  rgba(52, 46, 80, 1) 0%,
  rgba(116, 77, 166, 1) 100%
);
color: whitesmoke;
height: 2.5rem;
width: 100vw;

display: flex;
align-items: center;
padding: 2rem 4rem;

border-bottom: 1px solid var(--gray-100);

span {
  margin-left: auto;
  text-transform: capitalize;
}
`;
