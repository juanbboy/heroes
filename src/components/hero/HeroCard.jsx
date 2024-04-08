import React from 'react'
import { Link } from 'react-router-dom';

const HeroCard = ({ id, name, maquina, fecha_creacion, fecha_entrega }) => {
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
                            <Link to={`/hero/${id}`}>
                                Editar
                            </Link>
                        </div>
                        <div>
                            <Link to={`/hero/${id}`}>
                                Eliminar
                            </Link>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default HeroCard
