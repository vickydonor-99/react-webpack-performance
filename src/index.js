import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";

const appElement = document.getElementById("root");
const root = createRoot(appElement);
root.render(<App />);
