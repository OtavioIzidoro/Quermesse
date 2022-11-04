import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import InputsForm from "./Inputs";
import Button from "../Button/index"

interface IFormInputs {
  Name: string
  Password: number
}

const schema = yup.object({
  Name: yup.string().required(),
  Password: yup.string().required(),
}).required();

export default function InputLoginValidation() {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInputs>({
    resolver: yupResolver(schema)
  });
  const onSubmit = (data: IFormInputs) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputsForm type="text" placeholder="Nome:" {...register("Name")} />
      <p>{errors.Name?.message}</p>
        
      <InputsForm type="password" placeholder="Senha:" {...register("Name")} />
      <p>{errors.Password?.message}</p>
      
      <Button type="submit" />
    </form>
  );
}
