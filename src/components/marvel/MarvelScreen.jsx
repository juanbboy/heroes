import React from 'react'
import HeroList from '../hero/HeroList';


const MarvelScreen = () => {

    return (
        <div >
            <h1 className='animate__animated animate__fadeInRight'>Body</h1>

            <hr />


            <HeroList publisher='Body' />


        </div>
    )
}

export default MarvelScreen
