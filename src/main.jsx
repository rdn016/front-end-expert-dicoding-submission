import App from "./scripts/app";
import React from "react";
import { createRoot } from "react-dom/client";
import './styles/style.css'
import './public/logo/logo.png'

const root = createRoot(document.querySelector('#root'));
root.render(<App />);