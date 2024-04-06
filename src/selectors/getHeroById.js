import { Data } from "../data/heroes";

export const getHeroById = async id => {
    const data = Data()

    // return heroes.find(hero => hero.id === id);
    return await data.then((res) => res.find(hero => hero.id === id))

}