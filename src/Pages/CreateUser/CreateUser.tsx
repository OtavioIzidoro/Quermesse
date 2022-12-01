import ButtonForm from "../../Components/Button";
import {
  AccountAlready,
  Conteudo,
  CreateUserForm,
  CreateUserFormFundo,
  FormCreateUser,
  ReturnLogin,
  SignUp,
} from "../../Styles/createUser";
import {
  ContainerInput,
  FundoInputForm,
  InputContainer,
  InputForm,
} from "../../stylesGlobal";

export default function CreateUser() {
  return (
    <FundoInputForm>
      <CreateUserForm>
        <Conteudo>
          <SignUp>Criar Conta</SignUp>
        </Conteudo>
        <FormCreateUser>
          <InputForm
            placeholder="Nome"
            className="d-flex justify-content-center flex-column align-items-center "
          />
          <InputForm
            placeholder="Email"
            className="d-flex justify-content-center flex-column align-items-center "
          />
          <InputForm
            placeholder="Paroquia"
            className="d-flex justify-content-center flex-column align-items-center "
          />
          <InputForm
            placeholder="Cidade"
            className="d-flex justify-content-center flex-column align-items-center "
          />
          <InputForm
            placeholder="Senha"
            type={"password"}
            className="d-flex justify-content-center flex-column align-items-center "
          />
          <InputForm
            placeholder="Confirmar senha"
            type={"password"}
            className="d-flex justify-content-center flex-column align-items-center "
          />

          <ButtonForm value={"Acessar"} type={"submit"} />
        </FormCreateUser>

        <AccountAlready>
          Já tem conta?<ReturnLogin href="/Login">Login</ReturnLogin>
        </AccountAlready>
      </CreateUserForm>
    </FundoInputForm>
  );
}
