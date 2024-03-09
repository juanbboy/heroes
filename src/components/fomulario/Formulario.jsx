import React from 'react'
import { useForm } from '../../hooks/useForm';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const Formulario = () => {
    const navigate = useNavigate()
    const [formValues, handleInputChange, reset] = useForm({
        name: "",
        id: "",
        name: "",
        publisher: "",
        maquina: "",
        fecha_entrega: "",
        fecha_creacion: "",
        estado: "",
        descripcion: ""
    });
    const { id, name, publisher, maquina, fecha_entrega, fecha_creacion, estado, descripcion } = formValues;


    const handleRegister = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:4002/api/regdesarrollo`, formValues)

            // axios.post(`https://bakend.vercel.app/api/regneedle`, formValues)
            .then(res => {
                Swal.fire({
                    icon: 'success',
                    title: 'correcto',
                    showConfirmButton: false,
                    timer: 1200
                })
                reset();
                // navigate("/needlelist")
            })
    }

    const handleReturn = () => {
        navigate("/")
    }

    return (
        <div>
            <div className="col-sm-7 mx-auto">
                <form onSubmit={handleRegister}>
                    <div className="card h-100">
                        <div className="col-3 align-self-center">
                            <img src={`/assets/photo.jpg`} className="card-img-top m-1" alt={"id"} />
                        </div>

                        <div className="card-body">
                            {/* <h3 className="card-title">{id}</h3> */}

                            <ul className="list-group list-group-flush">
                                <li className="list-group-item d-flex justify-content-between">
                                    <label className='col-sm-3' htmlFor="id"><b> Nombre: </b></label>
                                    <input
                                        type="text"
                                        className="form-control form-control-sm "
                                        id="id"
                                        name="id"
                                        value={id}
                                        onChange={handleInputChange}
                                        required={true}
                                        autocomplete="on"
                                    /> </li>
                                <li className="list-group-item d-flex justify-content-between">
                                    <label className='col-3' htmlFor="name"><b> Descripciòn: </b></label>
                                    <input
                                        type="text"
                                        className="form-control form-control-sm "
                                        id="name"
                                        name="name"
                                        value={name}
                                        onChange={handleInputChange}
                                        required={true}
                                        autocomplete="on"
                                    /> </li>
                                <li className="list-group-item d-flex justify-content-between">
                                    <label className='col-3' htmlFor="publisher"><b> Tipo: </b></label>
                                    <input
                                        type="text"
                                        className="form-control form-control-sm "
                                        id="publisher"
                                        name="publisher"
                                        value={publisher}
                                        onChange={handleInputChange}
                                        required={true}
                                        autocomplete="on"
                                    /> </li>
                                <li className="list-group-item d-flex justify-content-between">
                                    <label className='col-3' htmlFor="maquina"><b> Maquina: </b></label>
                                    <input
                                        type="text"
                                        className="form-control form-control-sm "
                                        id="maquina"
                                        name="maquina"
                                        value={maquina}
                                        onChange={handleInputChange}
                                        required={true}
                                        autocomplete="on"
                                    /> </li>
                                <li className="list-group-item d-flex justify-content-between">
                                    <label className='col-3' htmlFor="fecha_creacion"><b> fecha: </b></label>
                                    <input
                                        type="text"
                                        className="form-control form-control-sm "
                                        id="fecha_creacion"
                                        name="fecha_creacion"
                                        value={fecha_creacion}
                                        onChange={handleInputChange}
                                        required={true}
                                        autocomplete="on"
                                    /> </li>
                                <li className="list-group-item d-flex justify-content-between">
                                    <label className='col-3' htmlFor="fecha_entrega"><b> Fecha de entrega: </b></label>
                                    <input
                                        type="text"
                                        className="form-control form-control-sm "
                                        id="fecha_entrega"
                                        name="fecha_entrega"
                                        value={fecha_entrega}
                                        onChange={handleInputChange}
                                        required={true}
                                        autocomplete="on"
                                    /> </li>
                                <li className="list-group-item d-flex justify-content-between">
                                    <label className='col-3' htmlFor="estado"><b> Estado: </b></label>
                                    <input
                                        type="text"
                                        className="form-control form-control-sm "
                                        id="estado"
                                        name="estado"
                                        value={estado}
                                        onChange={handleInputChange}
                                        required={true}
                                        autocomplete="on"
                                    /> </li>
                                <li className="list-group-item d-flex justify-content-between">
                                    <label className='col-3' htmlFor="descripcion"><b> Observaciòn: </b></label>
                                    <input
                                        type="text"
                                        className="form-control form-control-sm "
                                        id="descripcion"
                                        name="descripcion"
                                        value={descripcion}
                                        onChange={handleInputChange}
                                        required={true}
                                        autocomplete="on"
                                    /> </li>
                            </ul>

                        </div>
                        <div className="card-footer text-end">
                            {/* <button
                                className="btn btn-primary"
                                onClick={handleReturn}
                            >
                                Regresar
                            </button> */}
                            <button
                                className="btn btn-primary"
                                type="submit"
                            >
                                Ingresar
                            </button>
                        </div>

                    </div>
                </form >
            </div>
        </div >
    )
}

export default Formulario