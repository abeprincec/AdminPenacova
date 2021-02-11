import React from "react";
import { InputGroup, InputForm, InputLabel, InputSelect, OptionSelect } from "../../../Components/Input/Input";
import { useStateMachine } from "little-state-machine";
import updateAction from "../UpdateState/UpdateState";
import { Controller, useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { PrimaryButton } from "../../../Components/Button/Button";
import InputMask from "react-input-mask";

const Distritos = [
  "Aveiro",
  "Beja",
  "Braga",
  "Bragança",
  "Castelo Branco",
  "Coimbra",
  "Évora",
  "Faro",
  "Guarda",
  "Leiria",
  "Lisboa",
  "Portalegre",
  "Porto",
  "Santarém",
  "Setúbal",
  "Viana do Castelo",
  "Vila Real",
  "Viseu",
  "Ilha da Madeira",
  "Ilha de Porto Santo",
  "Ilha de Santa Maria",
  "Ilha de São Miguel",
  "Ilha Terceira",
  "Ilha da Graciosa",
  "Ilha de São Jorge",
  "Ilha do Pico",
  "Ilha do Faial",
  "Ilha das Flores",
  "Ilha do Corvo",
];

function Localizacao() {
  const { state, actions } = useStateMachine({ updateAction });
  const { register, handleSubmit, control } = useForm({
    defaultValues: state.Evento,
  });
  const { push } = useHistory();

  const onSubmit = (data) => {
    actions.updateAction(data);
    console.log(data);
    return push("/criar_evento/escaloes");
  };

  return (
    <main>
      <div className="container">
        <div className="col-lg-5 col-md-12 col-sm-12">
          <form autoComplete="off">
            <InputGroup>
              <InputLabel>Morada </InputLabel>
              <InputForm ref={register} type="text" name="morada" placeholder="Ex: Avenida 5 Outubro" />
            </InputGroup>
            <InputGroup>
              <InputLabel>Código Postal </InputLabel>
              <Controller
                placeholder="Ex: 0000-000"
                as={<InputMask maskChar="" ref={register} />}
                control={control}
                className="input-mask"
                mask="9999-999"
                name="codigopostal"
              ></Controller>
            </InputGroup>
            <InputGroup>
              <InputLabel>Localidade </InputLabel>
              <InputForm ref={register} type="text"  name="localidade" placeholder="Ex: Avenida 5 Outubro" />
            </InputGroup>
            <InputGroup>
              <InputLabel>Concelho</InputLabel>
              <InputForm ref={register} type="text"  name="concelho" placeholder="Ex: Avenida 5 Outubro" />
            </InputGroup>
            <InputGroup>
              <InputLabel>Distrito</InputLabel>
              <InputSelect ref={register} placeholder="Selecionar um Distrito" type="text" name="distrito">
                <OptionSelect disabled>Selecionar um Distrito</OptionSelect>
                {Distritos.map((distrito, index) => (
                  <OptionSelect key={index} value={distrito}>
                    {distrito}
                  </OptionSelect>
                ))}
              </InputSelect>
            </InputGroup>
            <InputGroup>
              <InputLabel>Latitude</InputLabel>
              <InputForm ref={register} type="text"  name="latitude" placeholder="Ex: Avenida 5 Outubro" />
            </InputGroup>
            <InputGroup>
              <InputLabel>Longitude</InputLabel>
              <InputForm ref={register} type="text"  name="longitude" placeholder="Ex: Avenida 5 Outubro" />
            </InputGroup>
          </form>
        </div>
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
export default Localizacao;
