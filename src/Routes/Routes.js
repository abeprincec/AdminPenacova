import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Signin from "../Pages/SignIn/Signin";
import NomeEvento from "../Pages/CriarEvento/Steps/Nome";
import SelectModalide from "../Pages/CriarEvento/Steps/SelectModalide";
import FormEvento from "../Pages/CriarEvento/Form";
import PrivateRoute from "./Private";
import AuthProvider from "../Context/Authentication/ProviderLogin";

import { StateMachineProvider, createStore } from "little-state-machine";

createStore({
  Evento: {
    nomeEvento: "",
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
    idmodalidade: 0,
    visivel: null,
    valorfederado: 0,
    valornaofederado: 0,
    valorrefeicao: 0,
    categorias: [
      {
        nomeCategoria: "",
        descricaoCategoria: "",
        tipoAtleta: null,
      },
    ],
  },
});

function Routes() {
  return (
    <StateMachineProvider>
      <Router>
        <AuthProvider>
          <Switch>
            <Route path="/criar_evento" component={FormEvento} />
            <Route exact path="/criarevento/select_modalidade" component={SelectModalide} />
            <Route exact path="/criarevento/inserir_nome" component={NomeEvento} />
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/signin" component={Signin} />
          </Switch>
        </AuthProvider>
      </Router>
    </StateMachineProvider>
  );
}

export default Routes;
