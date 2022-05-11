import ReactDOM from "react-dom";
import App from "./App";
import "./style.css";

//This renders what is returned by the App function and
//inserts it into the "root" div of the index.html file
ReactDOM.render(App(), document.getElementById("root"));
