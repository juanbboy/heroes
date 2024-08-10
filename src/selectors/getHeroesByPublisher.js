import { Data } from "../data/heroes";

export const GetHeroesByPublisher = async publisher => {
    const data = Data()
    console.log(data)
    return await data.then((res) => res.filter(hero => hero.publisher === publisher))
}



