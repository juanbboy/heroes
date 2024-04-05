import React, { useEffect, useMemo, useState } from 'react'
import { GetHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import HeroCard from './HeroCard';
import { Data1 } from '../../selectors/get';
// import { heroes } from '../../data/heroes';



const HeroList = ({ publisher }) => {

    const [heroes, setData] = useState()
    // console.log(data())


    useEffect(() => {
        data()
    }, [])





    // console.log(GetHeroesByPublisher(publisher).then((res) => {
    //     console.log(res, "res");
    //     return (res);
    // }))
    const data = async () => {

        await GetHeroesByPublisher(publisher).then((res) => {
            console.log(res, "res");
            setData(res)
            return (res);

        })

    }
    // const heroes = useMemo(() => GetHeroesByPublisher(publisher), [publisher]);
    // const [heroes, setheores] = useState()
    // const heroes = data.then(res => { return res })
    // console.log(GetHeroesByPublisher(publisher).then((res) => {
    //     setData(res)
    //     console.log(res, "res")
    // }))
    // console.log(GetHeroesByPublisher(publisher), "heroes")
    console.log(heroes, "heroes")
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
