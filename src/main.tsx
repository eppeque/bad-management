import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import ExampleContextProvider from "./ExampleContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ExampleContextProvider>
      <App />
    </ExampleContextProvider>
  </StrictMode>
);
