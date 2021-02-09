import React, { useContext } from "react";
import { InputGroup } from "../../Components/Input/Input";
import LogoBlack from "../../Assets/Images/penacova_logo.svg";
import LogoWhite from "../../Assets/Images/penacova_logo_white.svg";
import { Body } from "./Style";
import { PrimaryButton } from "../../Components/Button/Button";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import Axios from "axios";
import AuthContext from "../../Context/Authentication/ContextLogin";

function Signin() {
  var data = new Date();
  var ano = data.getFullYear();

  const localTheme = window.localStorage.getItem("theme");

  //Autenticação
  const { setToken } = useContext(AuthContext);
  const history = useHistory();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    Axios.post("http://192.168.1.101:8000/admin/signin", data).then((res) => {
      if (res.data.token) {
        setToken(res.data);
        return history.push("/");
      }
    });
  };

  return (
    <Body>
      <header className="header-logotipo">
        {localTheme === "Light" ? (
          <img id="Logotipo" src={LogoBlack} alt="Municipio de Penacova" />
        ) : (
          <img id="Logotipo" src={LogoWhite} alt="Municipio de Penacova" />
        )}
      </header>
      <main className="center">
        <div className="col-lg-3 col-10">
          <InputGroup>
            <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
              <div className="form-floating mb-3">
                <input
                  ref={register}
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="E-mail"
                  name="username"
                />
                <label htmlFor="floatingInput">Username</label>
              </div>
              <div className="form-floating">
                <input
                  ref={register}
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  name="password"
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>
              <PrimaryButton type="submit">Sign In</PrimaryButton>
            </form>
          </InputGroup>
        </div>
      </main>
      <footer>
        <p>@{ano} Todos os Direitos Reservados</p>
      </footer>
    </Body>
  );
}

export default Signin;
