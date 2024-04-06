import { useParams, Navigate, useNavigate } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById';
import React, { useEffect, useMemo, useState } from 'react'

const HeroScreen = () => {

    const { heroId } = useParams();
    const navigate = useNavigate()
    const [hero, sethero] = useState({
        id: "",
        name: "",
        maquina: "",
        fecha_creacion: "",
        fecha_entrega: "",
        descripcion: ""
    })
    let { id, name, maquina, fecha_creacion, fecha_entrega, descripcion } = hero;

    useEffect(() => {
        data()
    }, [])


    const data = async () => {
        await getHeroById(heroId).then((res) => {
            sethero(res)
            console.log(res)
        })
    }

    // const hero = await getHeroById(heroId).then((res) => {
    //     return res
    // })

    console.log(hero)
    console.log(data())

    if (!hero) {
        return null
        //     return <Navigate to='/marvel' />
    }


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
                        <img src={`/assets/${id}.jpg`} style={{ maxHeight: '180px', objectFit: 'scale-down' }} className="card-img-top m-1" alt={`${id}1`} />
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
