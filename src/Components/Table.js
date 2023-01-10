import React from "react";
import TableRow from "./TableRow.js";

const Table = ({ data, setDataToEdit, deleteData }) => {
    return (
        <div className="w-50 mx-auto">
            <table className="table">
                <thead>
                    <tr>
                        <th>Tarea</th>
                        <th>Accion</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0 ? (
                        data.map((x, index) => (
                            <TableRow
                                key={index}
                                el={x}
                                setDataToEdit={setDataToEdit}
                                deleteData={deleteData}
                            />
                        ))) : (
                        <tr>
                            <td colSpan="2">Sin datos</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default Table;