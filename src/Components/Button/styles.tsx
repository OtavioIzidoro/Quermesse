import styled from "styled-components";

export const ButtonLayout = styled.input`
  width: 349px;
  height: 43px;
  border-radius:40px;
  font-family: 'Manrope';
  color: #fff;
  font-size:15px;
  border: 0px solid; 
  background-color: #3FC2D4;
  text-align: center;

  @media(max-width: 320px){
  width: 280px;
  };
  @media(max-width: 375px){
    width: 320px;
  }
`;