import React, { useState, useRef } from "react";
import { InputGroup, InputForm, InputLabel, InputSelect, OptionSelect } from "../../../Components/Input/Input";
import { useStateMachine } from "little-state-machine";
import updateAction from "../UpdateState/UpdateState";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { PrimaryButton } from "../../../Components/Button/Button";
import { BiPlus, BiTrash } from "react-icons/bi";

function Escaloes() {
  const { state, actions } = useStateMachine({ updateAction });
  const [indexes, setIndexes] = useState([]);
  const [contador, setContador] = useState(0);
  const { register, handleSubmit } = useForm({
    defaultValues: state.Evento,
  });

  const AdicionarEscalao = () => {
    setIndexes((prevIndexes) => [...prevIndexes, contador]);
    setContador((prevContador) => prevContador + 1);
  };

  const RemoverEscalao = (index) => () => {
    setIndexes((prevIndexes) => [...prevIndexes.filter((item) => item !== index)]);
    setContador((prevCounter) => prevCounter - 1);
  };

  const onSubmit = (data) => {
    actions.updateAction(data);
  };
  console.log("Data:", state);
  console.log(indexes);

  return (
    <main>
      <div className="container">
        <div style={{ marginTop: 60 }} className="col-lg mb-5">
          {indexes.length < 1 ? (
            <div className="mb-4">
              <button onClick={AdicionarEscalao} className="add-buton">
                <BiPlus size="20" />
              </button>
              <span style={{ marginLeft: 12, fontSize: 14, fontWeight: 300 }}>Adicionar Escalão</span>
            </div>
          ) : null}
          <div>
            <button className="add-buton">
              <BiPlus size="20" />
            </button>
            <span style={{ marginLeft: 12, fontSize: 14, fontWeight: 300 }}>Adicionar Descrição</span>
          </div>
        </div>
        {indexes.map((index) => {
          return (
            <div key={index} className="row">
              <div className="col-md">
                <InputGroup>
                  <InputLabel htmlFor="tipoAtleta">Nome da Categoria {index}</InputLabel>
                  <InputForm
                    ref={register}
                    autoComplete="new-password"
                    type="text"
                    name={`categorias[${index}].nomeCategoria`}
                    id="nomeCategoria"
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
                    name={`categorias[${index}].descricaoCategoria`}
                    placeholder="Ex: Júniores Masculinos"
                  />
                </InputGroup>
              </div>
              <div className="col-md">
                <InputGroup>
                  <InputLabel>Tipo de Atleta {index}</InputLabel>
                  <InputSelect
                    ref={register}
                    name={`categorias[${index}].tipoAtleta`}
                    placeholder="Selecionar Tipo de Atleta"
                    type="text"
                  >
                    <OptionSelect defaultValue>Selecionar Tipo de Atleta </OptionSelect>
                    <OptionSelect value={1}>Atleta Federado</OptionSelect>
                    <OptionSelect value={2}>Atleta Não Federado</OptionSelect>
                  </InputSelect>
                </InputGroup>
              </div>
              <span className="remove-escalao" type="submit" onClick={RemoverEscalao(index)}>
                <BiTrash size="20" style={{ marginRight: 10, marginTop: -3 }} />
                Eliminar
              </span>
            </div>
          );
        })}

        {indexes.length >= 1 ? (
          <div className="d-flex justify-content-end">
            <span className="add-escalao" type="submit" onClick={AdicionarEscalao}>
              <BiPlus size="20" style={{ marginRight: 10, marginTop: -3 }} />
              Adicionar outro escalão
            </span>
          </div>
        ) : null}
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
