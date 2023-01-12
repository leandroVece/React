import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";

const initialForm = {
    name: "",
    id: null,
}

const Form = () => {

    const { updateData, createData, dataToEdit, setDataToEdit } = useContext(GlobalContext);
    const [form, setForm] = useState(initialForm);

    useEffect(() => {
        try {
            if (dataToEdit) {
                setForm(dataToEdit);
            } else {
                setForm(initialForm);
            }
        } catch (error) {
            this.setState({ error });
        }
    }, [dataToEdit]);

    const handleSubmit = (e) => {
        try {

            e.preventDefault();

            if (!form.name) {
                alert("Datos incompletos");
                return;
            }

            if (form.id === null) {
                createData(form);
            } else {
                updateData(form);
            }

            handleReset();
        } catch (error) {
            this.setState({ error });
        }
    };

    const handleChange = (e) => {
        try {
            // Do something that could throw
            setForm({
                ...form,
                [e.target.name]: e.target.value,
            });
        } catch (error) {
            this.setState({ error });
        }
    };

    const handleReset = (e) => {
        try {
            // Do something that could throw
            setForm(initialForm);
            setDataToEdit(null);
        } catch (error) {
            this.setState({ error });
        }
    };

    return (
        <form className="w-50 mx-auto mt-2" onSubmit={handleSubmit}>
            <div className="row g-4 align-items-center">
                <div className="col-auto">
                    <label htmlFor="textImput" className="col-form-label">Tarea</label>
                </div>
                <div className="col-auto">
                    <input type="text" maxLength={100} name="name" placeholder="Nombre de la tarea" onChange={handleChange} id="textImput" className="form-control" aria-describedby="passwordHelpInline" value={form.name} />
                </div>
                <div className="col-auto">
                    <span id="textImputHelpLinbe" className="form-text">
                        Debe menos de 100 caracteres.
                    </span>
                </div>
                <div className="col-auto">
                    <input className="btn btn-primary me-2" type="submit" value="Enviar" />
                    <input className="btn btn-primary" type="reset" value="Limpiar" onClick={handleReset} />
                </div>
            </div>
        </form>
    )
}

export default Form;