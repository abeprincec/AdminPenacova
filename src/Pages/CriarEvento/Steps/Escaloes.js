import React from "react";
import { InputGroup, InputForm, InputLabel, InputSelect, OptionSelect } from "../../../Components/Input/Input";
import { useStateMachine } from "little-state-machine";
import updateAction from "../UpdateState/UpdateState";
import { Controller, useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { PrimaryButton } from "../../../Components/Button/Button";

function Escaloes() {
  return (
    <main>
      <div className="container">
        <form autoComplete="anyrandomstring" name="test">
          <div className="row">
            <div className="col-md">
              <InputGroup>
                <InputLabel htmlFor="nomeCategoria">Nome da Categoria</InputLabel>
                <InputForm type="text" id="nomeCategoria" name="nome" placeholder="Ex: Maratona" />
              </InputGroup>
            </div>
            <div className="col-md">
              <InputGroup>
                <InputLabel htmlFor="nomeCategoria">Nome da Categoria</InputLabel>
                <InputForm type="text" id="nomeCategoria" name="nome" placeholder="Ex: Maratona" />
              </InputGroup>
            </div>
            <div className="col-md">
              <InputGroup>
                <InputLabel htmlFor="nomeCategoria">Nome da Categoria</InputLabel>
                <InputForm type="text" id="nomeCategoria" name="nome" placeholder="Ex: Maratona" />
              </InputGroup>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}
export default Escaloes;
