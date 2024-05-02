import { Data } from "../data/heroes";

export const getBy_id = async _id => {
    const data = Data()
    return await data.then((res) => res.find(hero => hero._id === _id))
}