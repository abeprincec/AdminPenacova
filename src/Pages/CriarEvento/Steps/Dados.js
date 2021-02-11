import React, { useCallback, useEffect, useState } from "react";
import {
  InputGroup,
  InputForm,
  InputLabel,
  InputSelect,
  OptionSelect,
  TextArea,
  InputFile,
} from "../../../Components/Input/Input";
import { useStateMachine } from "little-state-machine";
import updateAction from "../UpdateState/UpdateState";
import { useDropzone } from "react-dropzone";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { PrimaryButton } from "../../../Components/Button/Button";
import axios from "axios";

function DadosdoEvento() {
  const [modalidades, setModalidades] = useState([]);
  const { state, actions } = useStateMachine({ updateAction });
  const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject } = useDropzone({ accept: "image/*" });
  const { register, handleSubmit } = useForm({
    defaultValues: state.Evento,
  });
  const { push } = useHistory();

  useEffect(() => {
    axios.get("http://192.168.1.101:8000/admin/modalidades").then((response) => {
      setModalidades(response.data.data);
    });
  }, []);

  const onSubmit = (data) => {
    actions.updateAction(data);
    console.log(data);
    return push("/criar_evento/localizacao");
  };

  return (
    <main>
      <div className="container">
        <div className="col-lg-5 col-md-12 col-sm-12">
          <form autoComplete="off">
            <InputGroup>
              <InputLabel htmlFor="nomeEvento">Nome do Evento</InputLabel>
              <InputForm type="text" id="nomeEvento" name="nomeEvento" defaultValue={state.Evento.nomeEvento} />
            </InputGroup>
            <InputGroup>
              <InputLabel htmlFor="subtituloEvento">Subtitulo do Evento</InputLabel>
              <InputForm
                name="subtitulo"
                ref={register}
                type="text"
                id="subtituloEvento"
                placeholder="Ex: Taça Regional do Centro"
              />
            </InputGroup>
            <InputGroup>
              <InputLabel htmlFor="dataEvento">Data do Evento</InputLabel>
              <InputForm
                ref={register({ required: true })}
                style={{ maxHeight: 55, minHeight: 55 }}
                type="date"
                id="dataEvento"
                name="data"
              />
            </InputGroup>
            <InputGroup>
              <InputLabel htmlFor="dataEvento">Hora do Evento</InputLabel>
              <InputForm
                ref={register({ required: true })}
                style={{ maxHeight: 55, minHeight: 55 }}
                type="time"
                id="dataEvento"
                name="hora"
              />
            </InputGroup>
            <InputGroup>
              <InputLabel htmlFor="subtituloEvento">Descrição do Evento</InputLabel>
              <TextArea name="longadescricao" ref={register({ required: true })} placeholder="Inserir Descrição do Evento" />
            </InputGroup>
            <InputGroup>
              <InputLabel htmlFor="subtituloEvento">Upload Imagem</InputLabel>
              <InputFile {...getRootProps({ isDragActive, isDragAccept, isDragReject })}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop some files here, or click to select files</p>
              </InputFile>
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
export default DadosdoEvento;
