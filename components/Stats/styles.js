import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 4rem 0;
  display: flex;
  flex-direction: column;

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
