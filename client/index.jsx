import { createRoot } from "react-dom/client";
import "regenerator-runtime/runtime";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./components/App";
import "../client/assets/css/style.css";
import "../client/assets/css/glitch.css";
import "../client/assets/css/video-react.css";

const container = document.getElementById("app");
const root = createRoot(container);

root.render(<App />);
