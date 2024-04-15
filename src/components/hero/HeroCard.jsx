import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';

const HeroCard = ({ _id, id, name, maquina, fecha_creacion, fecha_entrega }) => {

    const elimina = async (id) => {
        Swal.fire({
            title: 'Estás seguro?',
            text: "¡No podrás revertir esto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Borrar!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                await axios.delete(`https://desarrollonylon.vercel.app/api/deldesarrollo/${id}`)
                    .then(res => {

                    })
                window.location.reload()
            }
        })
    }

    return (
        <div>
            <div key={id} className=" animate__animated animate__fadeIn">
                <div className="card w-100" >
                    <div className="col-8 align-self-center d-flex justify-content-center">
                        <Link to={`/img/${id}`} className='align-self-center d-flex justify-content-center' >
                            <img src={`/assets/${id}.jpg`} style={{ height: '150px', width: "100px" }} className="card-img-top m-1" alt={id} />
                        </Link>
                        <Link to={`/img/${id}1`} className='align-self-center d-flex justify-content-center' >
                            <img src={`/assets/${id}1.jpg`} style={{ height: '150px', width: "100px" }} className="card-img-top m-1" alt={`${id}1`} />
                        </Link>
                    </div>
                    <div className="card-body">
                        <h3 className="card-title">{id}</h3>

                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"> {name} </li>
                            <li className="list-group-item"> {maquina} </li>
                            <li className="list-group-item"> {fecha_creacion} </li>
                            <li className="list-group-item"> {fecha_entrega} </li>
                        </ul>

                    </div>
                    <div className="card-footer d-flex justify-content-between">
                        <div>
                            <Link to={`/hero/${id}`}>
                                Ver más ...
                            </Link>
                        </div>
                        <div>
                            <Link to={`/ingreso/edit/${_id}`}>
                                Editar
                            </Link>
                        </div>
                        <div>
                            <a type='button' className='link-primary' onClick={elimina.bind(this, _id)}>
                                Eliminar
                            </a>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}
export default HeroCard
