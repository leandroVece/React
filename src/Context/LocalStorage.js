import { useState } from "react";

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
    return {
        tasks,
        SaveToLocalStorage
    };
}

export { useLocalStorage }