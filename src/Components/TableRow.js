import React from "react";

const TableRow = ({ el, setDataToEdit, deleteData }) => {
    let { name, id } = el;

    return (
        <tr>
            <td>{name}</td>
            <td>
                <button className="btn btn-primary me-2" onClick={() => setDataToEdit(el)}>Editar</button>
                <button className="btn btn-primary" onClick={() => deleteData(id)}>Eliminar</button>
            </td>
        </tr>
    );
};

export default TableRow;