import React from "react";
import { FormPage } from "./Style";
import { NavLink, Route, Switch, useRouteMatch, useLocation, Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import { BsArrowRightShort } from "react-icons/bs";
import { useStateMachine } from "little-state-machine";
import updateAction from "./UpdateState/UpdateState";

//Components
import Dados from "./Steps/Dados";
import Localizacao from "./Steps/Localizacao";
import Escaloes from "./Steps/Escaloes";
import Precario from "./Steps/Precario";
import Resumo from "./Steps/Resumo";

function Form() {
  const { state, actions } = useStateMachine({ updateAction });
  const { path } = useRouteMatch();
  const location = useLocation();

  return (
    <FormPage>
      <header>
        <Navbar />
      </header>
      <div className="container titulo-pagina">
        <h2>{state.Evento.nome}</h2>
      </div>
      <main>
        <div className="container">
          <div className="links">
            <div>
              <NavLink activeClassName="active-tab" to={`${path}/dados_evento`} className="link">
                1. Dados do Evento
              </NavLink>
              <NavLink activeClassName="active-tab" to={`${path}/localizacao`} className="link">
                2. Localização
              </NavLink>
              <NavLink activeClassName="active-tab" to={`${path}/escaloes`} className="link">
                3. Escalões
              </NavLink>
              <NavLink activeClassName="active-tab" to={`${path}/precario`} className="link">
                4. Preçário
              </NavLink>
              <NavLink activeClassName="active-tab" to={`${path}/resumo`} className="link">
                5. Resumo
              </NavLink>
            </div>
          </div>
        </div>
        <div className="tabs">
          <Switch>
            <Route path={`${path}/dados_evento`} exact component={Dados} />
            <Route path={`${path}/localizacao`} component={Localizacao} />
            <Route path={`${path}/escaloes`} component={Escaloes} />
            <Route path={`${path}/precario`} component={Precario} />
            <Route path={`${path}/resumo`} component={Resumo} />
          </Switch>
        </div>
      </main>
    </FormPage>
  );
}

export default Form;
