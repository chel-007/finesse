import { createRoot } from "react-dom/client";
import App from "./App";

const rootElement = document.getElementById("root") as HTMLElement; // Type assertion
const root = createRoot(rootElement);
root.render(<App />);