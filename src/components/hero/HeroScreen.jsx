import { useParams, Navigate, useNavigate } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById';
import React, { useEffect, useMemo, useState } from 'react'
// import { Table } from 'react-bootstrap';
const HeroScreen = () => {

    const { heroId } = useParams();
    const navigate = useNavigate()
    const [hero, sethero] = useState()
    // let { id, name, maquina, fecha_creacion, fecha_entrega, descripcion } = hero;

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
                                <li className="list-group-item"> <b> fecha de creacion: </b> {hero.fecha_creacion} </li>
                                <li className="list-group-item"> <b> fecha de entrega: </b> {hero.fecha_entrega} </li>
                                <li className="list-group-item text-wrap"> <b> Observacion: </b> {hero.descripcion} </li>
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
                <div className='col-sm-6'>
                    <table striped hover size="sm" responsive="sm">
                        <thead >
                            <tr>
                                <th>Codigo</th>
                                <th>Nombre</th>
                                <th>G09</th>
                                <th>G05</th>
                                <th>1976</th>
                                <th>1975</th>
                                <th>7606</th>
                                <th>7909</th>
                                <th>0012</th>
                                <th>0016</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {needle.map((render) => ( */}
                            <tr>
                                {/* <td>{render[0]}</td>
                            <td>{render[1]}</td>
                            <td>{render[2]}</td>
                            <td>{render[3]}</td>
                            <td>{render[4]}</td>
                            <td>{render[5]}</td>
                            <td>{render[6]}</td>
                            <td>{render[7]}</td>
                            <td>{render[8]}</td>
                            <td>{render[9]}</td>
                            <td>{render[10]}</td> */}
                                {/* <td>{render[11]}</td> */}
                            </tr>
                            {/* ))} */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default HeroScreen
