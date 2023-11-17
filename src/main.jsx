import React from "react";
import ReactDOM from "react-dom/client";
//imports
import "./index.css";
import { App } from "./app";


//correo el local con npm run dev

//boton desde una funcion
const createBtn = () => {
  return <button>hola</button>;
};
//boton desde una funcion con parametros
const createBtnWithParametros = ({ text }) => {
  return <button>{text}</button>;
};

//para crear elementos en react, se hacen desde clases y van con la primera letra en Mayuscula
const ClassBtnWithParametros = ({ text }) => {
  return <button>{text}</button>;
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.Fragment>
    {/* <button>boton comun</button>
    {createBtn()}
    {createBtnWithParametros({ text: "boton con parametros" })}
    <ClassBtnWithParametros/> */}
    <App />
  </React.Fragment>
)
