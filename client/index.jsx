import "../client/assets/css/style.css";
import App from "./components/App";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";

const container = document.getElementById("app");
const root = createRoot(container);

// console.log("Running React version:", React.version);

root.render(<App />);
