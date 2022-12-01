import { useState } from "react";
import ButtonForm from "../Components/Button";
import InputsForm from "../Components/Input/Inputs";
import {
  ForgotPassword,
  Form,
  LoginForm,
  LoginFundo,
  CreateUs,
} from "../Styles/Login";

export default function Login() {
  const [teste, setIsTeste] = useState<string>("");

  return (
    <LoginFundo>
      <LoginForm>
        <Form>
          <InputsForm
            placeholder={"Email"}
            type={"text"}
            className={""}
            onChange={setIsTeste}
          />

          <InputsForm
            placeholder={"Senha"}
            type={"password"}
            className={""}
            onChange={setIsTeste}
          />

          <ButtonForm className="mt-3" value={"Acessar"} type={"submit"} />

          <div className="d-flex flex-column container-fluid">
            <ForgotPassword href="/Createuser" className="mt-2">Recuperar senha</ForgotPassword>
            <CreateUs href="/Createuser" className="mt-1">
              Cadastrar
            </CreateUs>
          </div>
        </Form>
      </LoginForm>
    </LoginFundo>
  );
}
