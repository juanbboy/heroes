import React, { useEffect, useMemo, useState } from 'react'
import { GetHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import HeroCard from './HeroCard';

// import { heroes } from '../../data/heroes';



const HeroList = ({ publisher }) => {

    const [heroes, setData] = useState(0)

    useEffect(() => {
        data()
    }, [])



    const data = async () => {
        await GetHeroesByPublisher(publisher).then((res) => {
            setData(res)
        })
    }
    // const heroes = useMemo(() => publisher, [publisher]);

    if (!heroes) return null

    return (
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 animate__animated animate__fadeIn">
            {
                heroes.map(hero => {
                    return (
                        <HeroCard key={hero.id} {...hero} />
                    )
                })
            }
        </div>
    )
}

export default HeroList
