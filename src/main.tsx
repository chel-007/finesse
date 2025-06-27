import React from "react"
import { createRoot } from "react-dom/client";
import App from "./App"
import Appmain from "./Appmain"
import "./index.css"

const rootElement = document.getElementById("root") as HTMLElement; // Type assertion
const root = createRoot(rootElement);

// Render FireCMSApp for /admin, App for other routes
if (window.location.pathname.startsWith("/admin")) {
  import("./App").then((module) => {
    root.render(<module.default />);
  });
} else {
  root.render(<Appmain />);
}
