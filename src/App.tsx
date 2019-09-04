import React from 'react';
import logo from './logo.svg';
import { LoginTicket, Wsfev1 } from "afip-apis";
import './App.css';



const DEFAULT_URLWSAAWSDL: string = "https://wsaahomo.afip.gov.ar/ws/services/LoginCms?WSDL";
const DEFAULT_SERVICIO: string = "wsfe";
const DEFAULT_CERTIFICATE: string = "./certificate.crt";
const DEFAULT_CERTIFICATE_KEY: string = "./private.key";


const loginTicket: LoginTicket = new LoginTicket();
loginTicket.wsaaLogin(DEFAULT_SERVICIO, DEFAULT_URLWSAAWSDL, DEFAULT_CERTIFICATE, DEFAULT_CERTIFICATE_KEY)
  .then(r => {
    console.log(r.header);
    const wsfev1: Wsfev1 = new Wsfev1("https://wswhomo.afip.gov.ar/wsfev1/service.asmx?WSDL");
    return wsfev1.FEDummy({})
      .then(d => {
        console.log(d);
      });
  })
  .catch(e => console.error(e));


const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
