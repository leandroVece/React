import React, { Fragment, useState } from "react";
import Table from "./Components/Table.js";
import Form from "./Components/Form";


function useLocalStorage(item, initalValue) {
  const localStorageTask = localStorage.getItem(item);
  let parsedTask;

  if (!localStorageTask) {
    localStorage.setItem(item, JSON.stringify(initalValue));
    parsedTask = [];
  } else {
    parsedTask = JSON.parse(localStorageTask);
  }

  const [tasks, setTask] = useState(parsedTask);

  const SaveToLocalStorage = (data) => {
    const stringConvert = JSON.stringify(data);
    localStorage.setItem(item, stringConvert);
    setTask(data)
  };
  return [
    tasks,
    SaveToLocalStorage
  ];
}


function App() {

  const [dataToEdit, setDataToEdit] = useState(null);
  const [tasks, saveTask] = useLocalStorage('task_V1', []);

  const CreateData = (data) => {
    data.id = Date.now();
    const lista = [...tasks, data];
    //setTasks([...tasks, data])
    saveTask(lista);
  }

  const updateData = (data) => {
    let newData = tasks.map((el) => (el.id === data.id ? data : el));;
    saveTask(newData);
  };

  const deleteData = (id) => {
    let isDelete = window.confirm(
      `¿Estás seguro de eliminar el registro con el id '${id}'?`
    );
    if (isDelete) {
      let newData = tasks.filter((el) => el.id !== id);
      saveTask(newData);
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
        data={tasks}
        setDataToEdit={setDataToEdit}
        deleteData={deleteData} />
    </Fragment>
  );
}

export default App;