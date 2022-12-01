import { InputForm } from "../../stylesGlobal";


interface IInput{
  placeholder: string,
  type: string,
  className: string,
  onChange: Function,
}

export default function InputsForm(props: IInput){
return (
  <InputForm className={props.className} placeholder={props.placeholder} type={props.type} onChange={(event: any) => props.onChange(event.target.value)}/>
  );
}