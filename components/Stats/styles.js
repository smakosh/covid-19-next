import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  text-align: center;

  @media (max-width: 960px) {
    flex-direction: column-reverse;
  }
`;

export const Card = styled.div`
  text-align: center;
  padding: 1rem 1rem 0.75rem;
  border-radius: 20px;
  background: #ffffff;
  box-shadow: 0 8px 30px -8px #ddd;

  @media (max-width: 680px) {
    padding: 0.5rem;
  }

  h1 {
    margin: 0;
    font-size: 22pt;
    font-weight: normal;

    @media (max-width: 1100px) {
      font-size: 18pt;
    }

    @media (max-width: 680px) {
      font-size: 16pt;
    }
  }

  p {
    margin: 0;
    color: ${({ color }) => color};
    font-size: 32pt;
    font-weight: bold;

    @media (max-width: 680px) {
      font-size: 24pt;
    }
  }
`;

export const Countries = styled.div`
  margin: 0 auto 2rem;
  max-width: 16rem;
  width: 100%;
  text-align: left;

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

export const Flag = styled.div`
  margin: 2rem 0;
  font-size: 4rem;
`;

export const ChartWrapper = styled.div`
  position: relative;
`;
