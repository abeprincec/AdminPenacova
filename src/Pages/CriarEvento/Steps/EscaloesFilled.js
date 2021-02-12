import React, { useState } from "react";
import { InputGroup, InputForm, InputLabel, InputSelect, OptionSelect, TextArea } from "../../../Components/Input/Input";
import { useStateMachine } from "little-state-machine";
import updateAction from "../UpdateState/UpdateState";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { PrimaryButton } from "../../../Components/Button/Button";
import { BiPlus, BiTrash, BiX } from "react-icons/bi";

function EscaloesFilled() {
  const { state, actions } = useStateMachine({ updateAction });
  const [indexes, setIndexes] = useState(state.Evento.categorias);
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

  console.log(indexes);

  return (
    <main>
      <div className="container">
        <ul>
          {indexes.map(({ nomeCategoria, descricaoCategoria, tipoAtleta }, index) => {
            return (
                <div key={index} className="row">
                <div className="col-md">
                  <InputGroup>
                    <InputLabel htmlFor="tipoAtleta">Nome da Categoria {index}</InputLabel>
                    <InputForm
                      ref={register({ required: true })}
                      defaultValue={nomeCategoria}
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
                      defaultValue={descricaoCategoria}
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
                      defaultValue={tipoAtleta}
                    >
                      <OptionSelect defaultValue>Selecionar Tipo de Atleta </OptionSelect>
                      <OptionSelect value={1}>Atleta Federado</OptionSelect>
                      <OptionSelect value={2}>Atleta Não Federado</OptionSelect>
                    </InputSelect>
                  </InputGroup>
                </div>
                <span type="button" className="remove-escalao" >
                  <BiTrash size="20" style={{ marginRight: 10, marginTop: -3 }} />
                  Eliminar
                </span>
              </div>
            );
          })}
        </ul>
      </div>
    </main>
  );
}
export default EscaloesFilled;
