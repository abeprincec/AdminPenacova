import React, { useState, useRef } from "react";
import { InputGroup, InputForm, InputLabel, InputSelect, OptionSelect } from "../../../Components/Input/Input";
import { useStateMachine } from "little-state-machine";
import updateAction from "../UpdateState/UpdateState";
import { Controller, useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { PrimaryButton } from "../../../Components/Button/Button";
import { BiPlus } from "react-icons/bi";

function Escaloes() {
  const nomeCampo = useRef([]);
  const [categorias, setCategorias] = useState([]);
  const { state, actions } = useStateMachine({ updateAction });
  const [indexes, setIndexes] = useState([]);
  const [contador, setContador] = useState(0);
  const { register, handleSubmit } = useForm({
    defaultValues: state.Evento,
  });

  console.log(state.Evento.Categorias);

  const onSubmit = (data) => {
    console.log(data);
    //console.log(state);
    console.log(categorias)
  };

  const AdicionarEscalao = () => {
    setIndexes((prevIndexes) => [...prevIndexes, contador]);
    setContador((prevContador) => prevContador + 1);
  };

  return (
    <main>
      <div className="container">
        <div style={{ marginTop: 60 }} className="col-lg mb-5">
          <button className="add-buton">
            <BiPlus size="20" />
          </button>
          <span style={{ marginLeft: 12, fontSize: 14, fontWeight: 300 }}>Adicionar Descrição</span>
        </div>
        {indexes.map((index) => {
          const  nomeCampo = state.Evento.Categorias;
          return (
            <div key={index} name={nomeCampo} className="row mb-4">
              <div className="col-md">
                <InputGroup>
                  <InputLabel htmlFor="tipoAtleta">Nome da Categoria {index}</InputLabel>
                  <InputForm
                    ref={register}
                    autoComplete="new-password"
                    type="text"
                    id="nomeCategoria"
                    name={`${nomeCampo}.nomeCategoria`}
                    placeholder="Ex: Maratona"
                  />
                </InputGroup>
              </div>
              <div className="col-md">
                <InputGroup>
                  <InputLabel htmlFor="descricaoCategoria">Descrição da Categoria {index}</InputLabel>
                  <InputForm
                    ref={register}
                    autoComplete="new-password"
                    type="text"
                    id="descricaoCategoria"
                    name={`${nomeCampo}.descricao`}
                    placeholder="Ex: Júniores Masculinos"
                  />
                </InputGroup>
              </div>
              <div className="col-md">
                <InputGroup>
                  <InputLabel>Tipo de Atleta {index}</InputLabel>
                  <InputSelect
                    ref={register}
                    placeholder="Selecionar Tipo de Atleta"
                    type="text"
                    name={`${nomeCampo}.tipoAtleta`}
                  >
                    <OptionSelect defaultValue>Selecionar Tipo de Atleta </OptionSelect>
                    <OptionSelect value={1}>Atleta Federado</OptionSelect>
                    <OptionSelect value={2}>Atleta Não Federado</OptionSelect>
                  </InputSelect>
                </InputGroup>
              </div>
            </div>
          );
        })}
        <div className="d-flex justify-content-end">
          <span className="add-escalao" type="submit" onClick={AdicionarEscalao}>
            <BiPlus size="20" style={{ marginRight: 10, marginTop: -3 }} />
            Adicionar outro escalão
          </span>
        </div>
      </div>
      <div className="container-fluid">
        <div className="d-flex justify-content-end">
          <PrimaryButton onClick={handleSubmit(onSubmit)} style={{ width: 130, position: "fixed", bottom: "8%", right: "5%" }}>
            Avançar
          </PrimaryButton>
        </div>
      </div>
    </main>
  );
}
export default Escaloes;
