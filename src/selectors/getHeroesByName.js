import { Data } from "../data/heroes";

export const getHeroesByName = async (name = '') => {
    const data = Data()

    if (name.length === 0) {
        return [];
    }

    name = name.toLowerCase()
    console.log(data)
    return await data.then((res) => res.filter(hero => hero.id.toLowerCase().includes(name)))
}