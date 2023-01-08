import React from "react";

const TitleTwo = (props) => {

    const ClickMe = (msg) => {
        alert("¡Me tocaste! " + msg)
    }

    return <h1
        onClick={() => ClickMe("¡Pervertido!")}
    > Hola {props.Nombre}</h1>;
};

export default TitleTwo;