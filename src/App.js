import React, { Fragment, useState } from "react";
import Table from "./Components/Table.js";
import Form from "./Components/Form";




function App() {

  const localStorageTask = localStorage.getItem("task_V1");
  const [dataToEdit, setDataToEdit] = useState(null);
  let parsedTask;

  if (!localStorageTask) {
    localStorage.setItem('task_V1', JSON.stringify([]));
    parsedTask = [];
  } else {
    parsedTask = JSON.parse(localStorageTask);
  }
  const [tasks, setTasks] = useState(parsedTask);


  const CreateData = (data) => {
    data.id = Date.now();
    const lista = [...tasks, data];
    //setTasks([...tasks, data])
    SaveToLocalStorage(lista);
  }

  const updateData = (data) => {
    let newData = tasks.map((el) => (el.id === data.id ? data : el));;
    SaveToLocalStorage(newData);
  };

  const deleteData = (id) => {
    let isDelete = window.confirm(
      `¿Estás seguro de eliminar el registro con el id '${id}'?`
    );
    if (isDelete) {
      let newData = tasks.filter((el) => el.id !== id);
      SaveToLocalStorage(newData);
    } else {
      return;
    }
  };

  const SaveToLocalStorage = (data) => {
    const stringConvert = JSON.stringify(data);
    localStorage.setItem('task_V1', stringConvert);
    setTasks(data)
  };
  return (
    <Fragment>
      <Form
        createData={CreateData}
        updateData={updateData}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit} />
      <Table
        data={tasks}
        setDataToEdit={setDataToEdit}
        deleteData={deleteData} />
    </Fragment>
  );
}

export default App;