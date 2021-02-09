import React from "react";
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

function SelectModalidade() {
  const { state, actions } = useStateMachine({ updateAction });
  const { handleSubmit, register } = useForm({
    defaultValues: state.Evento,
  });
  const { push } = useHistory();


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
          <form className="list-modalidade">
            <div className="row row-cols-1 row-cols-md-3 row-cols-lg-6 list-modalidades">
              <Select nome_modalidade="Futebol" borderColor="#3CA661" />
              <Select nome_modalidade="BTT-Aventura" borderColor="#6F87EE" />
              <Select nome_modalidade="Canoagem" borderColor="#EE6F6F" />
              <Select nome_modalidade="Basquetebol" borderColor="#EED06F" />
              <Select nome_modalidade="Trail - Aventura" borderColor="#996FEE" />
              <Select nome_modalidade="Atletismo" borderColor="#6FAFEE" />
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

export const Select = ({ value, key, id, borderColor, nome_modalidade }) => {
  return (
    <motion.ul
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      style={{ marginTop: 10, marginBottom: 10 }}
    >
      <Card className="custom-radio">
        <label>
          <input value={value} key={key} id={id} type="radio" name="modalidade" />
          <div className="radio-btn">
            <i>
              <BiCheck size="18" />
            </i>
          </div>
        </label>
        <h3 className="text-center">{nome_modalidade}</h3>
        <Border borderColor={borderColor} />
      </Card>
    </motion.ul>
  );
};
