import axios from 'axios';

export const Data = async () => {
    let data
    await axios.get('https://desarrollonylon.vercel.app/api/').then((res) => {

        data = (res.data.reverse())

    })

    return data
}

