import { ButtonLayout } from "./styles";

interface IButton{

  type: string;
}

export default function Button(props: IButton){
  return(
    <ButtonLayout value="Acessar" type={props.type}/>
  )
}