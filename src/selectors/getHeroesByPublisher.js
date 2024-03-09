import useState from "react";
import { Data } from "../data/heroes";


// export const GetHeroesByPublisher = publisher => {
//     const [heroes, setData] = useState()

//     // useEffect(() => {
//     Data(publisher).then((res) => {
//         setData(res.filter(hero => hero.publisher === publisher))
//         console.log(res.filter(hero => hero.publisher === publisher))
//     })
//     // }, [])

//     // console.log(Data().then((res) => {
//     //     data = res.filter(hero => hero.publisher === publisher);
//     //     console.log(data)
//     // }))
//     console.log("data")
//     console.log(heroes)
//     return heroes

// }


import axios from 'axios';
import { heroes } from "../data/heroes";


export const GetHeroesByPublisher = publisher => {

    const [data, setData] = useState()


    Data(publisher).then((res) => {
        console.log("adentro")
        setData(res.filter(hero => hero.publisher === publisher))
        console.log(res.filter(hero => hero.publisher === publisher))
        console.log("Data")
        // console.log(data)
    })

    console.log("afuera")
    console.log(data)


    // let heroe
    // await axios.get('http://localhost:4002/api/').then((res) => {

    //     heroe = (res.data.filter(hero => hero.publisher === publisher))
    // })


    // console.log(heroes.filter(hero => hero.publisher === publisher))
    // return heroes.filter(hero => hero.publisher === publisher);

    return data
}