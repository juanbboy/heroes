import React, { useState } from 'react'
import { useForm } from '../../hooks/useForm';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import 'react-calendar/dist/Calendar.css';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import { useSelector } from 'react-redux';



const Formulario = () => {

    const { uid } = useSelector(state => state.auth)
    const navigate = useNavigate()
    const params = useParams()
    const [datos, setdatos] = useState(0)
    const [formValues, handleInputChange, reset] = useForm({
        name: "",
        id: "",
        publisher: "",
        maquina: "",
        optenido: "",
        fecha_entrega: new Date(),
        fecha_creacion: new Date(),
        estado: "",
        descripcion: "",
        talla: ""
    });

    const { id, name, publisher, maquina, optenido, fecha_entrega, fecha_creacion, estado, descripcion, talla } = formValues;


    useEffect(() => {

        if (params.id != null) {
            axios.get('https://desarrollonylon.vercel.app/api').then((res) => {
                // axios.get('http://localhost:4002/api').then((res) => {
                console.log("entra")
                console.log(res.data.find((datos) => datos._id === params.id))
                cargar(res.data.find((datos) => datos._id === params.id))
            })
        }
        console.log(params.id)

    }, [params.id])

    const cargar = (datos) => {
        formValues.id = datos.id
        formValues.name = datos.name
        formValues.publisher = datos.publisher
        formValues.maquina = datos.maquina
        formValues.optenido = datos.optenido
        formValues.fecha_entrega = new Date(datos.fecha_entrega)
        formValues.fecha_creacion = new Date(datos.fecha_creacion)
        formValues.estado = datos.estado
        formValues.descripcion = datos.descripcion
        formValues.talla = datos.talla
        setdatos({
            ...formValues
        })
    }

    const inputstar = (e) => {
        formValues.fecha_creacion = e
        setdatos(+1)
    }

    const inputend = (e) => {
        formValues.fecha_entrega = e
        setdatos(+2)
    }

    const update = async (e) => {
        e.preventDefault();
        await axios.put(`https://desarrollonylon.vercel.app/api/update-desarrollo/${params.id}`, formValues)
            .then(res => {
                console.log(res);
                console.log(res.data);
                Swal.fire({
                    icon: 'success',
                    title: 'Actualizado',
                    showConfirmButton: false,
                    timer: 1200
                })
                handleReturn()
            })
    }


    const handleRegister = (e) => {
        e.preventDefault();
        console.log(formValues)
        axios.post(`https://desarrollonylon.vercel.app/api/regdesarrollo`, formValues)
            .then(res => {
                Swal.fire({
                    icon: 'success',
                    title: 'correcto',
                    showConfirmButton: false,
                    timer: 1200
                })
                reset();
            })
    }

    const handleReturn = () => {
        navigate(-1)
    }

    if (!uid === "nVWOi6EO3eNnNEKICTJGfg67bT83") return <h1 className='text-center'>!Acceso no autorizado¡</h1>

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
                                        className="form-control form-control-sm"
                                        id="id"
                                        name="id"
                                        value={id}
                                        onChange={handleInputChange}
                                        required={true}
                                        autoComplete="on"
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
                                        autoComplete="on"
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
                                        autoComplete="on"
                                    /> </li>
                                <li className="list-group-item d-flex justify-content-between">
                                    <label className='col-3' htmlFor="publisher"><b> Tallas: </b></label>
                                    <input
                                        type="text"
                                        className="form-control form-control-sm "
                                        id="talla"
                                        name="talla"
                                        value={talla}
                                        onChange={handleInputChange}
                                        required={true}
                                        autoComplete="on"
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
                                        autoComplete="on"
                                    /> </li>
                                <li className="list-group-item d-flex justify-content-between">
                                    <label className='col-3' htmlFor="maquina"><b> Op Teñido: </b></label>
                                    <input
                                        type="text"
                                        className="form-control form-control-sm "
                                        id="optenido"
                                        name="optenido"
                                        value={optenido}
                                        onChange={handleInputChange}
                                        required={true}
                                        autoComplete="on"
                                    /> </li>
                                <li className="list-group-item d-flex ">
                                    <label className='col-3' htmlFor="fecha_creacion"><b> fecha: </b></label>
                                    <DatePicker
                                        // type="date"
                                        onChange={inputstar}
                                        value={fecha_creacion}
                                        id="fecha_creacion"
                                        name="fecha_creacion"
                                        required={true}
                                    />
                                </li>
                                <li className="list-group-item d-flex ">
                                    <label className='col-3' htmlFor="fecha_entrega"><b> Fecha de entrega: </b></label>
                                    <DatePicker
                                        // type="date"

                                        onChange={inputend}
                                        value={fecha_entrega}
                                        id="fecha_entrega"
                                        name="fecha_entrega"
                                        required={true}
                                        minDate={fecha_creacion}
                                    />
                                </li>
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
                                        autoComplete="on"
                                    /> </li>
                                <li className="list-group-item d-flex justify-content-between">
                                    <label className='col-3' htmlFor="descripcion"><b> Observaciòn: </b></label>
                                    <textarea
                                        type="text"
                                        className="form-control form-control-sm"
                                        rows={7}
                                        id="descripcion"
                                        name="descripcion"
                                        value={descripcion}
                                        onChange={handleInputChange}
                                        required={false}
                                        autoComplete="on"
                                    /> </li>
                            </ul>
                        </div>
                    </div>
                </form >
                <div className="card-footer text-center">
                    <button
                        className="btn btn-primary mx-2"
                        onClick={handleReturn}
                    >
                        Regresar
                    </button>
                    <button
                        className="btn btn-primary mx-2"
                        type="submit"
                        onClick={handleRegister}
                    >
                        Ingresar
                    </button>
                    {params.id ? <button
                        className="btn btn-primary mx-2"
                        onClick={update}
                    >
                        Actualizar
                    </button> : ''}
                </div>
            </div>
        </div >
    )
}

export default Formulario