import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { Body } from "./Style";

function Dashboard({}) {
  return (
    <Body>
      <header>
        <Navbar />
      </header>
      <main>
        <div className="container">
          <div className="row">
            <h2>
              <Hora />
            </h2>
          </div>
          <div className="row">
              
          </div>
        </div>
      </main>
    </Body>
  );
}

export default Dashboard;

function Hora() {
  var data = new Date();
  var hora = JSON.stringify(data.getHours());
  var mensagem;

  if (hora >= 20 || hora < 7) {
    mensagem = "Boa Noite";
  } else if (hora >= 8 && hora < 13) {
    mensagem = "Bom Dia";
  } else if (hora >= 13 && hora < 20) {
    mensagem = "Boa Tarde";
  }

  return mensagem;
}
