import React, { Fragment, useState } from "react";
import Table from "./Components/Table.js";
import Form from "./Components/Form";


const listTask = [
  {
    id: 0,
    name: "Sacar la basura"
  },
  {
    id: 1,
    name: "Limpiar la casa"
  },
  {
    id: 2,
    name: "Aprender react.js"
  },
];

function App() {
  const [state, setState] = useState(listTask);
  const [dataToEdit, setDataToEdit] = useState(null);

  const CreateData = (data) => {
    data.id = state.length;
    setState([...state, data])
  }

  const updateData = (data) => {
    let newData = state.map((el) => (el.id === data.id ? data : el));
    setState(newData);
  };

  const deleteData = (id) => {
    let isDelete = window.confirm(
      `¿Estás seguro de eliminar el registro con el id '${id}'?`
    );
    if (isDelete) {
      let newData = state.filter((el) => el.id !== id);
      setState(newData);
    } else {
      return;
    }
  };

  return (
    <Fragment>
      <Form
        createData={CreateData}
        updateData={updateData}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit} />
      <Table
        data={state}
        setDataToEdit={setDataToEdit}
        deleteData={deleteData} />
    </Fragment>
  );
}

export default App;