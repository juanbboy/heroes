import axios from 'axios';

export const Data1 = async publisher => {
    let heroe
    await axios.get('http://localhost:4002/api/').then((res) => {

        heroe = (res.data.filter(hero => hero.publisher === publisher))
    })

    return heroe
}