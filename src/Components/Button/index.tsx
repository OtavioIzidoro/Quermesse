import { ButtonLayout } from "./styles";

interface IButton{
  value: string;
  type: string;
  className?: string,
}

export default function ButtonForm(props: IButton){
  return(
    <ButtonLayout  className={props.className} value={props.value} type={props.type}/>
  )
}