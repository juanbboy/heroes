import axios from 'axios';

export const Data = async () => {
    let data
    await axios.get('https://desarrollonylon.vercel.app/api/').then((res) => {

        data = (res.data)

    })

    return data
}

export const Datamedida = async () => {
    let data
    await axios.get('http://localhost:4002/api/medidas').then((res) => {

        data = (res.data)
        console.log(res.data)
    })

    return data
}
