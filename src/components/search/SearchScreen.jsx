import React, { useEffect, useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import queryString from 'query-string'
import { getHeroesByName } from '../../selectors/getHeroesByName';
import HeroCard from '../hero/HeroCard';
import { getByEstado } from '../../selectors/getByEstado';

const SearchScreen = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const [searchHeroes, setsearchHeroes] = useState()

    useEffect(() => {
        search()
    }, [])

    // const { q = '' } = queryString.parse(location.search);

    const [formValues, handleInputChange] = useForm({
        searchText: ""
    });

    const { searchText } = formValues;

    const search = async (e) => {
        await (getHeroesByName(e)).then((res) => {
            console.log(res, "res1")
            if (res == "") {
                console.log("entra")
                getByEstado(e).then((res) => {
                    setsearchHeroes(res)
                    console.log(res, "res2")
                })
            } else setsearchHeroes(res)
        })
    }
    // const searchHeroes = useMemo(() => getHeroesByName(q), [q]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // navigate(`?q=${searchText}`)
    }

    const handleChange = (e) => {
        handleInputChange(e)
        // navigate(`?q=${searchText}`)
        search(e.target.value)
    }


    if (!searchHeroes) return null




    return (
        <div>
            <h1>Search Screen</h1>
            <hr />
            <div className="row">
                <div className="col-sm-5">
                    <h3>
                        Búsqueda de DP's
                    </h3>

                    <form onSubmit={handleSubmit} >

                        <input
                            type="text"
                            placeholder="Ingrese el nombre del DP"
                            className="form-control mt-4"
                            name="searchText"
                            autoComplete="off"
                            value={searchText}
                            onChange={handleChange}
                        />

                        <button
                            className="btn btn-primary mt-3"
                            type="submit">
                            Buscar
                        </button>

                    </form>
                </div>
                <div className="col-sm-7">
                    <h3>
                        Resultados
                    </h3>
                    <hr />
                    {
                        searchHeroes.map(hero => <div className='p-1 col-8'><HeroCard key={hero.id} {...hero} /> </div>)
                    }
                </div>
            </div>
        </div>
    )
}

export default SearchScreen
