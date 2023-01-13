import React from "react";
import { ContextProvider } from "./Context/GlobalContext";
import AppIU from "./Components/AppIU";

function App() {

  return (
    <ContextProvider>
      <AppIU />
    </ContextProvider>
  );
}

export default App;