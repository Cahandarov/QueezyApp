import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./assets/fonts/stylesheet.css";
import { Provider } from "react-redux";
import { store } from './components/App/store'; 

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>  
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
);
