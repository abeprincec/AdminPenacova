import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Signin from "../Pages/SignIn/Signin";
import NomeEvento from "../Pages/CriarEvento/Steps/Nome";
import SelectModalide from "../Pages/CriarEvento/Steps/SelectModalide";
import PrivateRoute from "./Private";
import AuthProvider from "../Context/Authentication/ProviderLogin";

import { StateMachineProvider, createStore } from "little-state-machine";

createStore({
  Evento: {
    nome: "",
    subtitulo: "",
    curtadescricao: "",
    longadescricao: "",
    descricaopreco: "",
    descricaocategoria: "",
    hora: "",
    data: "",
    morada: "",
    localidade: "",
    concelho: "",
    distrito: "",
    codigopostal: "",
    longitude: "",
    latitude: "",
    imagem: "",
    maxinscritos: null,
    idmodalidade: null,
    visivel: null,
    valorfederado: null,
    valornaofederado: null,
    valorrefeicao: null,
  },
});

function Routes() {
  return (
    <StateMachineProvider>
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/criar_evento/select_modalidade" component={SelectModalide} />
            <PrivateRoute exact path="/criar_evento/inserir_nome" component={NomeEvento} />
            <PrivateRoute exact path="/" component={Dashboard} />
            <Route exact path="/signin" component={Signin} />
          </Switch>
        </AuthProvider>
      </Router>
    </StateMachineProvider>
  );
}

export default Routes;
