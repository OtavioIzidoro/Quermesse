import styled from "styled-components";

export const InputForm = styled.input`
  width: 355px;
  height: 54px;
  font-size:16px;
  background-color: #F7F5F6;
  border-radius 5px;
  padding: 10px;
  border: 0px solid ;
  outline: none;
  :placeholder {
    font-family: "Manrope";
  }

  @media(max-width: 320px){
    width: 280px;
  height: 54px;
  
  };
  @media(max-width: 375px){
    width: 320px;
  }
`;

export const FundoInputForm = styled.div`
width: 100vw;
height: 100vh;
background: #E3EEF4;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;


`

export const ContainerInput = styled.div`
width: 400px;
height: 500px;
background: #fff;
border-radius: 30px 0 30px 0;

@media(max-width: 320px){
  width:300px;

};

@media(max-width: 375px){
  width: 340px;
}

`

export const InputContainer = styled.form`
width: 400px;
height: 340px;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
gap: 25px;

@media(max-width: 320px){
  width:300px;
  height: 340px;
};

@media(max-width: 375px){
  width: 340px;
}

`