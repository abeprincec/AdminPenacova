import React, { useState, useRef } from "react";
import {
  InputGroup,
  InputForm,
  InputLabel,
  InputSelect,
  OptionSelect,
  TextArea,
  Checkbox,
} from "../../../Components/Input/Input";
import { useStateMachine } from "little-state-machine";
import updateAction from "../UpdateState/UpdateState";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { PrimaryButton } from "../../../Components/Button/Button";
import { BiPlus, BiTrash, BiX } from "react-icons/bi";

function Escaloes() {
  const { state, actions } = useStateMachine({ updateAction });
  const [checkFederado, setCheckFederado] = useState(false);
  const [checkNaoFederado, setCheckNaoFederado] = useState(false);
  const { register, handleSubmit, errors, watch } = useForm({
    defaultValues: state.Evento,
  });
  const precoFederado = watch("precoFederado");
  const precoNaoFederado = watch("precoNaoFederado");
  const refeicao = watch("refeicao");
  const { push } = useHistory();

  const onSubmit = (data) => {
    if (data.valorfederado === "") {
      data.valorfederado = 0
    }
    if (data.valornaofederado === "") {
      data.valornaofederado = 0;
    }
    if (data.valorrefeicao === "") {
      data.valorrefeicao = 0;
    }
    data.valorfederado = parseInt(data.valorfederado);
    data.valornaofederado = parseInt(data.valornaofederado);
    data.valorrefeicao = parseInt(data.valorrefeicao);

    actions.updateAction(data);
    console.log(data);
    return push("/criar_evento/resumo")
    
  };
  console.log(state);

  return (
    <main>
      <div className="container">
        <div style={{ marginTop: 60 }} className="col-lg mb-5">
          <div type="button" className="mb-4">
            <button className="add-buton">
              <BiPlus size="20" />
            </button>
            <span style={{ marginLeft: 12, fontSize: 14, fontWeight: 300 }}>Adicionar Descrição</span>
          </div>
        </div>
        <ul>
          <li className="mb-4">
            <InputGroup>
              <InputLabel>Preço Federado</InputLabel>
              <InputForm id="valorfederado" name="valorfederado" ref={register} type="number" placeholder="Ex: 10€" />
            </InputGroup>
          </li>
          <li className="mb-4">
            <InputGroup>
              <InputLabel>Preço Não Federado</InputLabel>
              <InputForm id="valornaofederado" name="valornaofederado" ref={register} type="number" placeholder="Ex: 15€" />
            </InputGroup>
          </li>
          <li>
            <InputGroup>
              <InputLabel>Preço Refeição</InputLabel>
              <InputForm name="valorrefeicao" id="valorrefeicao" ref={register} type="number" placeholder="Ex: 5€" />
            </InputGroup>
          </li>
        </ul>
      </div>
      <div className="container-fluid">
        <div className="d-flex justify-content-end">
          <PrimaryButton onClick={handleSubmit(onSubmit)} style={{ width: 130, position: "fixed", bottom: "5%", right: "5%" }}>
            Avançar
          </PrimaryButton>
        </div>
      </div>
    </main>
  );
}
export default Escaloes;
