import React, { Fragment } from "react";
import TitleOne from "./Components/componetClass.js";
import TitleTwo from "./Components/componetFuntion.js";

function App() {
  return (
    <Fragment>
      <TitleOne />
      <TitleTwo Nombre="Pedro" />
    </Fragment>
  );
}

export default App;
