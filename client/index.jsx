import { createRoot } from "react-dom/client";
import "regenerator-runtime/runtime";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./components/App";
import "../client/assets/css/style.css";

const container = document.getElementById("app");
const root = createRoot(container);

root.render(<App />);
