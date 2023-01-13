import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";

const TableRow = (el) => {
    const { setDataToEdit, deleteData } = useContext(GlobalContext)
    const obj = Object.values(el);
    let { name, id } = obj[0];
    console.log(obj[0]);
    return (
        <tr>
            <td>{name}</td>
            <td>
                <button className="btn btn-primary me-2" onClick={() => setDataToEdit(obj[0])}>Editar</button>
                <button className="btn btn-primary" onClick={() => deleteData(id)}>Eliminar</button>
            </td>
        </tr>
    );
};

export default TableRow;