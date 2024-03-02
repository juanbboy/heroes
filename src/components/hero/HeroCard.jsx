import React from 'react'
import { Link } from 'react-router-dom';

const HeroCard = ({ id, name, maquina, descripcion, fecha_creacion, fecha_entrega }) => {
    return (
        <div>
            <div key={id} className="col animate__animated animate__fadeIn">
                <div className="card h-100">
                    <div className="col-7 align-self-center">
                        <img src={`/assets/${id}.jpeg`} style={{ maxHeight: '200px', objectFit: 'scale-down' }} className="card-img-top m-1" alt={id} />
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
                    <div className="card-footer">
                        <Link
                            to={`/hero/${id}`}
                        >
                            Ver más ...

                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroCard
