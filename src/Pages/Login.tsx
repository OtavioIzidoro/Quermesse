import { Form, LoginForm, LoginFundo } from "../Styles/Login";

export default function Login() {
  return (
    <LoginFundo>
      <LoginForm>
        <a href="/">Voltar</a>
        <Form>
          <div className="form-group formEmail">
            <label>Email:</label>
            <input
              type="email"
              className="form-control form "
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            
          </div>
          <div className="form-group formSenha">
            <label>Senha:</label>
            <input
              type="password"
              className="form-control form"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <button type="submit" className="btn btn-primary button">
            Acessar
          </button>
          <a href="/Createuser">CRIAR USUARIO</a>
        </Form>
        
      </LoginForm>
    </LoginFundo>
  );
}
