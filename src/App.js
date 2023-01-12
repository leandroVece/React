import React from "react";
import { ContextProvider } from "./Context/GlobalContext";
import AppIU from "./Components/AppIU";

function App() {

  /*const [dataToEdit, setDataToEdit] = useState(null);
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
  };*/

  return (
    <ContextProvider>
      <AppIU />
    </ContextProvider>
  );
}

export default App;