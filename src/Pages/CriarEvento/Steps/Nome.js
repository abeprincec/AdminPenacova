import React, { useState } from "react";
import Navbar from "../../../Components/Navbar/Navbar";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "../UpdateState/UpdateState";
import { PageNomeModalidade } from "./Style";
import { InputGroup } from "../../../Components/Input/Input";
import { PrimaryButton } from "../../../Components/Button/Button";

function InserirNome() {
  const [nome, setNome] = useState("Nome do Evento");

  const { state } = useStateMachine(updateAction);
  const { register, handleSubmit, errors } = useForm({
    defaultValues: state.Evento,
  });
  const { actions } = useStateMachine({ updateAction });
  const { push } = useHistory();

  const onChangeNome = (event) => {
    setNome(event.target.value);
  };
  if (nome === "") {
    setNome("Nome do Evento");
  }

  //Guardar Nome do Evento
  const onSubmit = (data) => {
    actions.updateAction(data);
    console.log(data)
    if (data.nome !== "") {
      return push("/criarevento/select_modalidade");
    }
  };

  return (
    <PageNomeModalidade>
      <header>
        <Navbar />
      </header>
      <main>
        <div className="container">
          <div className="row">
            <h1>{nome}</h1>
          </div>
          <div className="row">
            <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
              <InputGroup>
                <div className="form-floating mb-3">
                  <input
                    onChange={onChangeNome}
                    type="text"
                    className={`form-control ${errors.nome ? "is-invalid" : ""}`}
                    id="floatingInput"
                    placeholder="E-mail"
                    name="nome"
                    ref={register({ required: true })}
                  />
                  <label htmlFor="floatingInput">Nome do Evento </label>
                </div>
              </InputGroup>

              <div className="d-flex justify-content-end">
                <div>
                  <PrimaryButton style={{ width: 130, backgroundColor: "#191919", marginRight: 16 }}>Voltar</PrimaryButton>
                  <PrimaryButton type="submit" style={{ width: 130 }}>
                    Avançar
                  </PrimaryButton>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    </PageNomeModalidade>
  );
}

export default InserirNome;
