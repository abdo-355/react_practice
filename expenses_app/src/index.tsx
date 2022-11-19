import ReactDOM from "react-dom/client";
import App from "./App";

import "./index.css";

const el = document.getElementById("root") as HTMLDivElement;

const root = ReactDOM.createRoot(el);

root.render(<App />);
