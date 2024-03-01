import React from 'react'
import { Link } from 'react-router-dom';

const HeroCard = ({ id, superhero, publisher, alter_ego, first_appearance, characters  }) => {
    return (
        <div>
            <div key={id} className="col animate__animated animate__fadeIn">
                        <div className="card h-100">
                            <div className="col-5 align-self-center">
                                <img src={`/assets/${id}.jpg`} style={{maxHeight: '100px', objectFit: 'scale-down'}} className="card-img-top" alt={superhero} />
                            </div>
                            <div className ="card-body">
                                <h3 className ="card-title">{ superhero }</h3>

                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"> { alter_ego } </li>
                                    <li className="list-group-item"> { first_appearance } </li>
                                    <li className="list-group-item"> {characters} </li>
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
