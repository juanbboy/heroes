import { useParams, useNavigate, Link } from 'react-router-dom'
import { getBy_id } from '../../selectors/getBy_id';
import React, { useEffect, useMemo, useState } from 'react'
import AddDynamicInputFields from '../addfield/AddInputFields';


const HeroScreen = () => {

    const { id } = useParams();
    const navigate = useNavigate()
    const [hero, sethero] = useState()
    const [conexion, setConexion] = useState({})


    const conex = useMemo(async () => {
        await getBy_id(id).then((res) => {
            sethero(res)
            console.log("1")
        })
    }, [id])

    useEffect(() => {
        setConexion(conex)
    }, [conexion, conex])


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
                            <Link to={`/img/${hero.id}`} className='align-self-center d-flex justify-content-center' >
                                <img loading="lazy" src={`/assets/${hero.id}.jpg`} style={{ height: '210px', width: "120px" }} className="card-img-top m-1" alt={hero.id} />
                            </Link>
                            <Link to={`/img/${hero.id}1`} className='align-self-center d-flex justify-content-center' >
                                <img loading="lazy" src={`/assets/${hero.id}1.jpg`} style={{ height: '210px', width: "120px" }} className="card-img-top m-1" alt={`${hero.id}1`} />
                            </Link>
                        </div>
                        <div className="card-body">
                            {/* <h3 className="card-title">{id}</h3> */}

                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"> <b> Descripción: </b> {hero.name} </li>
                                <li className="list-group-item"><b> Tipo: </b> {hero.publisher} </li>
                                <li className="list-group-item"><b> talla: </b> {hero.talla} </li>
                                <li className="list-group-item"> <b>Maquina: </b> {hero.maquina} </li>
                                <li className="list-group-item"> <b> fecha de creacion: </b> {new Date(hero.fecha_creacion).toLocaleDateString()} </li>
                                <li className="list-group-item"> <b> fecha de entrega: </b> {new Date(hero.fecha_entrega).toLocaleDateString()} </li>
                                <li className="list-group-item"> <b>Teñido: </b> <a href="http://intranet.dugotex.com/download_formato" target='blank'>4052014</a></li>
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
                    <AddDynamicInputFields {...hero} />
                </div>
            </div>
        </div >
    )
}

export default HeroScreen
