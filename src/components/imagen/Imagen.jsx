import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';



const Imagen = () => {
    const params = useParams()
    const navigate = useNavigate()
    console.log(params.id)

    const handleReturn = () => {
        navigate(-1);
    }


    return (
        <div>

            <img onClick={handleReturn} src={`/assets/${params.id}.jpg`} className="card-img-top m-1  col animate__animated animate__fadeIn" alt={params.id} />

        </div>
    )
}

export default Imagen