import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  text-align: center;

  @media (max-width: 960px) {
    flex-direction: column-reverse;

    > canvas {
      margin-bottom: 2rem;
    }
  }
`;

export const Card = styled.div`
  text-align: center;
  padding: 2rem;
  border-radius: 20px;
  background: #ffffff;
  box-shadow: 8px 8px 30px #e3e3e3, -8px -8px 30px #ffffff;

  h1 {
    font-size: 26pt;
    font-weight: normal;
  }

  p {
    color: ${({ color }) => color};
    font-size: 36pt;
    font-weight: bold;
  }
`;

export const Countries = styled.div`
  max-width: 40%;
  width: 100%;
  text-align: left;
  margin: 1rem auto;

  .css-2b097c-container {
    width: 100%;
  }

  @media (max-width: 1200px) {
    max-width: 50%;
  }

  @media (max-width: 960px) {
    max-width: 90%;
  }
`;
