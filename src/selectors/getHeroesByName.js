import { Data } from "../data/heroes";

export const getHeroesByName = async (name = '') => {
    const data = Data()

    if (name.length === 0) {
        return [];
    }

    name = name.toLowerCase()
    console.log(name)
    return await data.then((res) => res.filter(res => res.id?.toLowerCase().includes(name)))
}