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

  const { register, handleSubmit, errors } = useForm({
    defaultValues: state.Evento,
  });
  const { push } = useHistory();

  const onSubmit = (data) => {
    actions.updateAction(data);
    setSave(true);
  };

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
          <li>
            <input id="c1" type="checkbox" />
            <label for="c1">Checkbox</label>
          </li>
        </ul>
      </div>
    </main>
  );
}
export default Escaloes;
