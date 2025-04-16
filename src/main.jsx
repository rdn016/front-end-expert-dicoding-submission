import App from "./scripts/app";
import React from "react";
import { createRoot } from "react-dom/client";
import './styles/main.css'

const root = createRoot(document.querySelector('#root'));
root.render(<App />);