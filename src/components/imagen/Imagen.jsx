import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';



const Imagen = () => {
    const params = useParams()
    const CLOUD_NAME = "dr64wmtkm"
    const navigate = useNavigate()

    const handleReturn = () => {
        navigate(-1);
    }


    return (
        <div>

            <img onClick={handleReturn} src={`https://res.cloudinary.com/${CLOUD_NAME}/${params.id}`} className="card-img-top m-1  col animate__animated animate__fadeIn" alt={params.id} />

        </div>
    )
}

export default Imagen