import { useState } from "react";
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


export const GetHeroesByPublisher = async publisher => {
    // const [datas, setDatas] = useState()
    const data = Data()


    // let datas
    // Data(publisher).then((res) => {
    //     console.log("adentro")
    //     setData(res.filter(hero => hero.publisher === publisher))
    //     console.log(res.filter(hero => hero.publisher === publisher))
    //     console.log("Data")
    //     console.log(data)
    // })

    // console.log("afuera")
    // console.log(data)


    // let heroe
    // axios.get('http://localhost:4002/api/').then((res) => {

    //     heroe = (res.data.filter(hero => hero.publisher === publisher))
    // })


    // console.log(data.then((res) => {
    //     console.log("adentro")
    //     setDatas(res.filter(hero => hero.publisher === publisher))
    //     console.log(res.filter(hero => hero.publisher === publisher))
    //     console.log("Data")
    // }))

    console.log(data, "data")
    // console.log(datas, "data1")
    // return heroes.filter(hero => hero.publisher === publisher);
    // console.log(data.then((res) => res.filter(hero => hero.publisher === publisher)), "heroes")
    const res = await data.then((res) => res.filter(hero => hero.publisher === publisher))
    console.log(res, "res")
    return res
    // return data

}