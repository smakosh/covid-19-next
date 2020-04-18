import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  text-align: center;

  @media (max-width: 960px) {
    flex-direction: column-reverse;
    padding: 1rem 0 0 0;
  }
`;

export const Card = styled.div`
  text-align: center;
  padding: 2rem 1rem;
  border-radius: 20px;
  background: #ffffff;
  box-shadow: 0 8px 30px -8px #ddd;

  @media (max-width: 680px) {
    padding: 0.5rem;
  }

  h1 {
    margin-bottom: 1rem;
    font-size: 22pt;
    font-weight: normal;

    @media (max-width: 1100px) {
      margin: 0;
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

  @media (max-width: 680px) {
    font-size: 3rem;
    margin: 0;
  }
`;

export const ChartWrapper = styled.div`
  position: relative;
`;

export const Source = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem 0;

  span {
    display: block;
    margin: 0 1rem;
  }
`;
