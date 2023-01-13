import React from "react";
import Table from "../Table";
import Form from "../Form";
import { GlobalContext } from "../../Context/GlobalContext";
import Modal from "../Modal";


function AppIU() {

    //const value = React.useContext(GlobalContext);
    const {
        updateData,
        createData,
        dataToEdit,
        setDataToEdit,
        DataTask,
    } = React.useContext(GlobalContext)


    return (

        // <div>
        //     <Form
        //         updateData={value.updateData}
        //         createData={value.createData}
        //         dataToEdit={value.dataToEdit}
        //         setDataToEdit={value.setDataToEdit} />
        //     <Table
        //         DataTask={value.DataTask}
        //     />
        // </div>

        <div>
            <Modal />
            <Form
                updateData={updateData}
                createData={createData}
                dataToEdit={dataToEdit}
                setDataToEdit={setDataToEdit} />
            <Table
                DataTask={DataTask}
            />
        </div>
    )
}


export default AppIU;