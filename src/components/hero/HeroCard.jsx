import axios from 'axios';
import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const HeroCard = ({ _id, id, name, maquina, estado, fecha_entrega, talla, img1, img2 }) => {
    const { uid } = useSelector(state => state.auth)
    const CLOUD_NAME = "dr64wmtkm"
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
                        <Link to={`/img/${img1}`} className='align-self-center d-flex justify-content-center'>
                            <img loading="lazy" src={`https://res.cloudinary.com/${CLOUD_NAME}/${img1}`} style={{ height: '150px', width: "100px" }} className="card-img-top m-1" alt={id} />
                        </Link>
                        <Link to={`/img/${img2}`} className='align-self-center d-flex justify-content-center' >
                            <img loading="lazy" src={`https://res.cloudinary.com/${CLOUD_NAME}/${img2}`} style={{ height: '150px', width: "100px" }} className="card-img-top m-1" alt={`${id}1`} />
                        </Link>
                    </div>
                    <div className="card-body">
                        <h3 className="card-title">{id}</h3>

                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"> {name} </li>
                            <li className="list-group-item"> {maquina} </li>
                            <li className="list-group-item"> {talla} </li>
                            <li className="list-group-item"> {estado} </li>
                            <li className="list-group-item"> {new Date(fecha_entrega).toLocaleDateString()} </li>
                        </ul>

                    </div>
                    <div className="card-footer d-flex justify-content-between">
                        <div>
                            <Link to={`/dp/${_id}`}>
                                Ver más ...
                            </Link>
                        </div>
                        {(uid === "nVWOi6EO3eNnNEKICTJGfg67bT83") ?
                            <div>
                                <Link to={`/income/edit/${_id}`}>
                                    Editar
                                </Link>
                            </div>
                            : ""}
                        {(uid === "nVWOi6EO3eNnNEKICTJGfg67bT83") ?
                            <div>
                                <div type='button' className='link-primary' onClick={elimina.bind(this, _id)}>
                                    <ins>  Eliminar </ins>
                                </div>

                            </div>
                            : ""}
                    </div>
                </div>
            </div >
        </div >
    )
}
export default HeroCard
