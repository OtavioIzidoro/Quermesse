import { InputForm } from "./style";

interface IInput{
  placeholder: string,
  type: string,
}

export default function InputsForm(props: IInput){
return (
  <InputForm placeholder={props.placeholder} type={props.type}/>
  );
}