import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import HeroCard from './HeroCard';



const HeroList = ({ publisher }) => {

    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

    return (
        <div className="row row-cols-1 row-cols-md-4 row-cols-lg-3 g-4 animate__animated animate__fadeIn">
            {
                heroes.map( hero => {
                    return (
                        <HeroCard key={hero.id} {...hero} />
                    )
                } )
            }
        </div>
    )
}

export default HeroList
