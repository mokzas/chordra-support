import styled from "styled-components";

export const MiddleBlockSection = styled.section`
  position: relative;
  padding: 7.5rem 0 3rem;
  text-align: center;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    padding: 5.5rem 0 3rem;
  }
`;

export const Content = styled.p`
  padding: 0.75rem 0 0.75rem;
`;

export const ContentWrapper = styled.div`
  max-width: 570px;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

export const FeatureList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
`;

export const FeatureItem = styled.div`
  text-align: left;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  
  h4 {
    margin-bottom: 0.5rem;
    color: #1890ff;
  }
  
  p {
    margin: 0;
    font-size: 0.9rem;
    line-height: 1.5;
  }
`; 