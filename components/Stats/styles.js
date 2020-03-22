import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  text-align: center;

  @media (max-width: 960px) {
    flex-direction: column-reverse;

    > canvas {
      margin-bottom: 2rem;

      @media (max-width: 680px) {
        margin-bottom: 0.5rem;
      }
    }
  }
`;

export const Card = styled.div`
  text-align: center;
  padding: 2rem 1rem;
  border-radius: 20px;
  background: #ffffff;
  box-shadow: 8px 8px 30px #e3e3e3, -8px -8px 30px #ffffff;

  @media (max-width: 680px) {
    padding: 0.5rem;
  }

  h1 {
    font-size: 22pt;
    font-weight: normal;

    @media (max-width: 1100px) {
      font-size: 18pt;
    }

    @media (max-width: 680px) {
      margin-bottom: 0.5rem;
      font-size: 16pt;
    }
  }

  p {
    color: ${({ color }) => color};
    font-size: 32pt;
    font-weight: bold;

    @media (max-width: 680px) {
      margin: 0.5rem 0;
      font-size: 24pt;
    }
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
