import { Data } from "../data/heroes";

export const GetHeroesByPublisher = async publisher => {
    const data = Data()

    return await data.then((res) => res.filter(hero => hero.publisher === publisher))
}


