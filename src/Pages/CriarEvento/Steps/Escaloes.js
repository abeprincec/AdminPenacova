import React, { useState, useRef } from "react";
import { InputGroup, InputForm, InputLabel, InputSelect, OptionSelect, TextArea } from "../../../Components/Input/Input";
import { useStateMachine } from "little-state-machine";
import updateAction from "../UpdateState/UpdateState";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { PrimaryButton } from "../../../Components/Button/Button";
import { BiPlus, BiTrash, BiX } from "react-icons/bi";

function Escaloes() {
  const { state, actions } = useStateMachine({ updateAction });
  const [indexes, setIndexes] = useState([]);
  const [contador, setContador] = useState(0);
  const [save, setSave] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { register, handleSubmit, errors } = useForm({
    defaultValues: state.Evento,
  });
  const { push } = useHistory();

  const AdicionarEscalao = () => {
    setIndexes((prevIndexes) => [...prevIndexes, contador]);
    setContador((prevContador) => prevContador + 1);
  };

  const RemoverEscalao = (index) => () => {
    setIndexes((prevIndexes) => [...prevIndexes.filter((item) => item !== index)]);
    setContador((prevCounter) => prevCounter - 1);
    actions.updateAction({ categorias: [] });
  };

  const onSubmit = (data) => {
    actions.updateAction(data);
    setSave(true);
  };

  const Avancar = () => {
    console.log(state);
    return push("/criar_evento/precario");
  };

  const AtivarDescricao = () => {
    setIsOpen(true);
  };

  const RemoverDescricao = () => {
    setIsOpen(false);
  };

  return (
    <main>
      <div className="container">
        <div style={{ marginTop: 60 }} className="col-lg mb-5">
          {indexes.length < 1 ? (
            <div type="button" onClick={AdicionarEscalao} className="mb-4">
              <button className="add-buton">
                <BiPlus size="20" />
              </button>
              <span style={{ marginLeft: 12, fontSize: 14, fontWeight: 300 }}>Adicionar Escalão</span>
            </div>
          ) : null}
          {isOpen === true ? (
            <span type="button" className="remove-descricao" onClick={RemoverDescricao}>
              <BiX size="20" style={{ marginRight: 10, marginTop: -3 }} />
              Fechar
            </span>
          ) : (
            <div type="button" onClick={AtivarDescricao}>
              <button className="add-buton">
                <BiPlus size="20" />
              </button>
              <span style={{ marginLeft: 12, fontSize: 14, fontWeight: 300 }}>Adicionar Descrição</span>
            </div>
          )}
        </div>
        <div className="mb-5">
          {isOpen === true ? (
            <InputGroup>
              <InputLabel>Descrição</InputLabel>
              <TextArea  ref={register} name="descricaocategoria" placeholder="Inserir uma Descrição"/>
            </InputGroup>
          ) : null}
        </div>
        {indexes.map((index) => {
          return (
            <div key={index} className="row">
              <div className="col-md">
                <InputGroup>
                  <InputLabel htmlFor="tipoAtleta">Nome da Categoria {index}</InputLabel>
                  <InputForm
                    ref={register({ required: true })}
                    autoComplete="new-password"
                    className={`${errors.nomeCategoria ? "is-invalid" : ""}`}
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
                    ref={register({ required: true })}
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
                    ref={register({ required: true })}
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
              <span type="button" className="remove-escalao" onClick={RemoverEscalao(index)}>
                <BiTrash size="20" style={{ marginRight: 10, marginTop: -3 }} />
                Eliminar
              </span>
            </div>
          );
        })}

        {indexes.length >= 1 ? (
          <div className="d-flex justify-content-end">
            <span className="add-escalao" type="button" onClick={AdicionarEscalao}>
              <BiPlus size="20" style={{ marginRight: 10, marginTop: -3 }} />
              Adicionar outro escalão
            </span>
          </div>
        ) : null}
      </div>
      <div className="container-fluid">
        <div className="d-flex justify-content-end">
          {save === false ? (
            <PrimaryButton onClick={handleSubmit(onSubmit)} style={{ width: 130, position: "fixed", bottom: "8%", right: "5%" }}>
              Guardar
            </PrimaryButton>
          ) : null}
          {save === true ? (
            <PrimaryButton onClick={Avancar} style={{ width: 130, position: "fixed", bottom: "8%", right: "5%" }}>
              Avançar
            </PrimaryButton>
          ) : null}
        </div>
      </div>
    </main>
  );
}
export default Escaloes;
