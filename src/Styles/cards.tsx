import styled from "styled-components";

export const FundoCards = styled.div`
  width: 100vw;
  height: 350px;

  padding: 161px;
  display: flex;
  flex-wrap: wrap !important;
  justify-content: space-between;

  @media (max-width: 320px) {
    padding: 15px  !important;
  }
 
  
`;

export const CardsEvents = styled.div`
  width: 20rem;
  height: 20rem;
  border: 1px solid black;
  border-radius: 10px;
  margin-top: 10px;
  @media (max-width: 375px) {
    width: 18rem;
  }
`;

export const TitleCard = styled.h1`
  text-align: center;
  font-family: Manrope;
  font-weight: 600;
  font-size: 30px;
  line-height: 41px;
`;

export const Informacao = styled.div`
  display: flex;
  padding-left: 20px;

  .IconLocal {
    margin-top: 10px;
  }
`;

export const Local = styled.p`
  font-size: 12px;
  text-align: center;
  font-family: Manrope;
  font-weight: 600;

  line-height: 41px;
`;
export const ImageDivulga = styled.div`
  .teste {
    width: 20rem;
    border-radius: 10px 10px 0 0;
  }
  @media (max-width: 375px) {
    .teste {
      width: 18rem;
    }
  }
`;
