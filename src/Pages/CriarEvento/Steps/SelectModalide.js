import React, { useEffect, useState } from "react";
import Navbar from "../../../Components/Navbar/Navbar";
import { PageNomeModalidade, Card, Border } from "./Style";
import { BiCheck } from "react-icons/bi";
import { motion } from "framer-motion";
import { PrimaryButton } from "../../../Components/Button/Button";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "../UpdateState/UpdateState";
import axios from "axios";

function SelectModalidade() {
  const [modalidades, setModalidades] = useState([]);
  const { state, actions } = useStateMachine({ updateAction });
  const { handleSubmit, register } = useForm({
    defaultValues: state.Evento,
  });
  const { push } = useHistory();

  useEffect(() => {
    axios
      .get("http://192.168.1.101:8000/admin/modalidades")
      .then((response) => {
        setModalidades(response.data.data);
      })
      .catch(function (error) {
        if (error.response) {
          if (error.response === 404) {
            // Enviar Página 404
          }
        }
      });
  }, []);

  const onSubmit = (data) => {
    data.idmodalidade = parseInt(data.idmodalidade);
    actions.updateAction(data);
    return push("/criar_evento/dados_evento")
    
  };

  return (
    <PageNomeModalidade>
      <header>
        <Navbar />
      </header>
      <main>
        <div className="container">
          <div className="row">
            <h1>Selecionar Modalidade...</h1>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="list-modalidade">
            <div className="row row-cols-1 row-cols-md-3 row-cols-lg-6 list-modalidades">
              {modalidades.slice(0, 5).map((modalidade, index) => (
                <Select
                  refs={register}
                  ids={modalidade.id}
                  nome_modalidade={modalidade.nome}
                  borderColor={modalidade.cor}
                  value={modalidade.idmodalidade}
                  key={index}
                  name="idmodalidade"
                />
              ))}
            </div>
            <div className="d-flex justify-content-end mt-5">
              <div>
                <Link to="/criar_evento/inserir_nome">
                  <PrimaryButton style={{ width: 130, backgroundColor: "#191919", marginRight: 16 }}>Voltar</PrimaryButton>
                </Link>
                <PrimaryButton type="submit" style={{ width: 130 }}>
                  Avançar
                </PrimaryButton>
              </div>
            </div>
          </form>
        </div>
      </main>
    </PageNomeModalidade>
  );
}

export default SelectModalidade;

export const Select = ({ value, ids, borderColor, nome_modalidade, refs, name }) => {
  return (
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      style={{ marginTop: 10, marginBottom: 10 }}
    >
      <Card className="custom-radio">
        <label>
          <input ref={refs} value={value} id={ids} type="radio" name={name} />
          <div className="radio-btn">
            <i>
              <BiCheck size="18" />
            </i>
          </div>
        </label>
        <h3 className="text-center">{nome_modalidade}</h3>
        <Border borderColor={borderColor} />
      </Card>
    </motion.div>
  );
};
