import { useState } from "react";
import reactLogo from "./assets/react.svg";
import popLogo from "./assets/logopop.png";
import "./App.css";
import { Popup } from "./components/popup/Popup";
import popupConfig from "./components/popup/Popup.json";

function App() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      {showPopup && <Popup config={popupConfig} onClose={setShowPopup} />}
      <a
        href="https://popconvert.com/pt-br/leads-opt-in-email-marketing/"
        target="_blank"
      >
        <div className="logo-container">
          <img src={popLogo} className="logo" alt="Popconvert logo" />
        </div>
      </a>
      <h1 className="main__title">
        Leads qualificados para seu e-mail marketing
      </h1>
      <div className="card">
        <button
          className="logo__button"
          onClick={() => setShowPopup(!showPopup)}
        >
          Exibir Popup!
        </button>
        <p className="main__text">
          Alta performance na captação de leads para Email Marketing
        </p>
      </div>
      <p className="read-the-docs">Desenvolvido por Rafael Reis Araújo</p>
    </>
  );
}

export default App;
