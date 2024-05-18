import { Data } from "../data/heroes";

export const getByEstado = async (estado = '') => {
    const data = Data()

    if (estado.length === 0) {
        return [];
    }

    estado = estado.toLowerCase()
    console.log(estado)
    return await data.then((res) => res.filter(res => res.estado?.toLowerCase().includes(estado)))
}