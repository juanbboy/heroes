import axios from 'axios';

export const Data = async () => {
    let data
    await axios.get('https://nylondesarrollo.vercel.app/api/').then((res) => {

        data = (res.data)

    })

    return data
}


export const heroes = [
    {
        'id': 'DP480S',
        'name': 'Panty levanta cola',
        'publisher': 'Body',
        'maquina': 'SM8-TOP1V',
        'fecha_creacion': '01-03-2024',
        'fecha_entrega': 'Pendiente',
        'descripcion': 'base DJ01L4',
    }
]