import React, { useEffect, useMemo, useState } from 'react'
import { GetHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import HeroCard from './HeroCard';
import { Data1 } from '../../selectors/get';
// import { heroes } from '../../data/heroes';



const HeroList = ({ publisher }) => {

    // const [heroes, setData] = useState()

    // useEffect(() => {
    //     getHeroesByPublisher(publisher).then((res) => {
    //         setData(res)
    //         console.log(res)
    //     })

    // }, [])

    // const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
    const heroes = GetHeroesByPublisher(publisher)
    console.log(GetHeroesByPublisher(publisher))
    // console.log(heroes)

    if (!heroes) return null

    return (
        <div className="row row-cols-1 row-cols-md-4 row-cols-lg-3 g-4 animate__animated animate__fadeIn">
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
