import { useParams, Navigate, useNavigate } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById';
import React, { useEffect, useMemo, useState } from 'react'
import AddDynamicInputFields from '../addfield/AddInputFields';
// import { Table } from 'react-bootstrap';.

const HeroScreen = () => {

    const { heroId } = useParams();
    const navigate = useNavigate()
    const [hero, sethero] = useState()
    // let { id, name, , fecha_creacion, fecha_entrega, descripcion } = hero;

    useEffect(() => {
        data()
    }, [])

    const data = async () => {
        await getHeroById(heroId).then((res) => {
            sethero(res)
            console.log(res)
        })
    }

    if (!hero) return null

    const handleReturn = () => {
        navigate(-1);
    }

    return (
        <div>
            <h1> {hero.id} </h1>
            <hr />
            <div className='row'>
                <div key={hero.id} className="col-sm-4 ">
                    <div className="card h-100">
                        <div className="col-7 align-self-center d-flex justify-content-center">
                            <img src={`/assets/${hero.id}.jpg`} style={{ maxHeight: '180px', objectFit: 'scale-down' }} className="card-img-top m-1" alt={`${hero.id}1`} />
                            <img src={`/assets/${hero.id}1.jpg`} style={{ maxHeight: '180px', objectFit: 'scale-down' }} className="card-img-top m-1" alt={`${hero.id}1`} />
                        </div>
                        <div className="card-body">
                            {/* <h3 className="card-title">{id}</h3> */}

                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"> <b> Descripción: </b> {hero.name} </li>
                                <li className="list-group-item"><b> Tipo: </b> {hero.publisher} </li>
                                <li className="list-group-item"> <b>Maquina: </b> {hero.maquina} </li>
                                <li className="list-group-item"> <b> fecha de creacion: </b> {new Date(hero.fecha_creacion).toLocaleDateString()} </li>
                                <li className="list-group-item"> <b> fecha de entrega: </b> {new Date(hero.fecha_entrega).toLocaleDateString()} </li>
                                <li className="list-group-item px-3" style={{ whiteSpace: "pre-wrap" }}><b>Observacion:</b><br />{hero.descripcion} </li>
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
                <div className='col-sm-8'>
                    <table striped hover size="sm" responsive="sm">
                        <thead >
                            <tr>
                                <th>Descripcion</th>
                                <th>Cetme</th>
                                <th>plano</th>
                                <th>Cetme</th>
                                <th>plano</th>
                                <th>Cetme</th>
                                <th>plano</th>
                                <th>Cetme</th>
                                <th>plano</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <AddDynamicInputFields />
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default HeroScreen
