import React from "react";
import { InputGroup, InputForm, InputLabel, InputSelect, OptionSelect } from "../../../Components/Input/Input";
import { useStateMachine } from "little-state-machine";
import updateAction from "../UpdateState/UpdateState";

function DadosdoEvento() {
  const { state, actions } = useStateMachine({ updateAction });

  return (
    <main>
      <div className="col-5">
        <form style={{ marginTop: 30 }}>
          <InputGroup>
            <InputLabel htmlFor="nomeEvento">Nome do Evento</InputLabel>
            <InputForm type="text" id="nomeEvento" placeholder="" defaultValue={state.Evento.nome} />
          </InputGroup>
          <InputGroup>
            <InputLabel htmlFor="nomeEvento">Nome do Evento</InputLabel>
            <InputSelect>
              <OptionSelect>1</OptionSelect>
              <OptionSelect>2</OptionSelect>
              <OptionSelect>3</OptionSelect>
              <OptionSelect>4</OptionSelect>
            </InputSelect>
          </InputGroup>
        </form>
      </div>
    </main>
  );
}
export default DadosdoEvento;
