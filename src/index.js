import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import App from './App';

const rootElement = document.getElementById('root');

// Use createRoot instead of ReactDOM.render
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
/* 
//We import react
import React from "react";
//We import react DOM library which allows us to interact with the document odject Model
// in the browser
import ReactDOM from "react-dom";
import './index.css';
import App from './App';

//the render takes as first parameter a component and as second argument where we want to put it 
ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
 document.getElementById('root')) */