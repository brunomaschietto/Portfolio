import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyled } from "./GlobalStyle";
import { ChakraProvider } from "@chakra-ui/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <GlobalStyled />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
