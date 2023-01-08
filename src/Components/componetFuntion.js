import React, { useState } from "react";

const TitleTwo = (props) => {

    const [state, setState] = useState("Pablo");
    const ClickMe = (msg) => {
        alert(msg + " ¡Me tocaste!");
        setState('Marrano')
    }

    return <h1
        onClick={() => ClickMe(state)}
    > Hola {props.Nombre} y {state}</h1>;
};

export default TitleTwo;