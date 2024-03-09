import React, { useMemo } from 'react'
import { useParams, Navigate, useNavigate } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById';

const HeroScreen = () => {

    const { heroId } = useParams();
    const navigate = useNavigate()

    const hero = useMemo(() => getHeroById(heroId), [heroId]);

    if (!hero) {
        return <Navigate to='/marvel' />
    }
    const { id, name, maquina, fecha_creacion, fecha_entrega, descripcion } = hero;

    const handleReturn = () => {
        navigate(-1);
    }

    return (
        <div>
            <h1> {id} </h1>
            <hr />

            <div key={id} className="col-4 mx-auto">
                <div className="card h-100">
                    <div className="col-7 align-self-center d-flex justify-content-center">
                        <img src={`/assets/${id}.jpg`} style={{ maxHeight: '180px', objectFit: 'scale-down' }} className="card-img-top m-1" alt={id} />
                        <img src={`/assets/${id}1.jpg`} style={{ maxHeight: '180px', objectFit: 'scale-down' }} className="card-img-top m-1" alt={`${id}1`} />
                    </div>
                    <div className="card-body">
                        {/* <h3 className="card-title">{id}</h3> */}

                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"><b> Tipo: </b> {name} </li>
                            <li className="list-group-item"> <b>Maquina: </b> {maquina} </li>
                            <li className="list-group-item"> <b> fecha de creacion: </b> {fecha_creacion} </li>
                            <li className="list-group-item"> <b> fecha de entrega: </b> {fecha_entrega} </li>
                            <li className="list-group-item"> <b> Descripción: </b> {descripcion} </li>
                        </ul>

                    </div>
                    <div className="card-footer text-end">
                        <button
                            className="btn btn-primary"
                            onClick={handleReturn}
                        >
                            Regresar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroScreen
