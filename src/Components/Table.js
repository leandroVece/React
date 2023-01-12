import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext.js";
import TableRow from "./TableRow.js";

const Table = () => {
    const { DataTask } = useContext(GlobalContext)
    console.log(DataTask)
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
                    {DataTask.length > 0 ? (
                        DataTask.map((x, index) => (
                            <TableRow
                                key={index}
                                el={x}
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