import React, { useMemo } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import queryString from 'query-string'
import { getHeroesByName } from '../../selectors/getHeroesByName';
import HeroCard from '../hero/HeroCard';

const SearchScreen = () => {

    const location = useLocation();
    const navigate = useNavigate();


    const { q = '' } = queryString.parse(location.search);
    
    const [ formValues, handleInputChange ] = useForm({
        searchText : q
    });

    const { searchText } = formValues;

    const searchHeroes = useMemo(() => getHeroesByName(q), [q]);

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`?q=${searchText}`)
    }
    return (
        <div>
            <h1>Search Screen</h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <h3>
                        Búsqueda de Héroes
                    </h3>

                    <form onSubmit={ handleSubmit } >

                        <input 
                            type="text"
                            placeholder="Ingrese el nombre del héroe"
                            className="form-control mt-4"
                            name="searchText"
                            autoComplete="off"
                            value={ searchText }
                            onChange={ handleInputChange }
                        />

                        <button
                            className="btn btn-primary mt-3" 
                            type="submit">
                            Buscar
                        </button>

                    </form>
                </div>
                <div className="col-7">
                    <h3>
                        Resultados
                    </h3>
                    <hr />
                        {
                            searchHeroes.map(hero => <HeroCard key={hero.id} {...hero} />)
                        }
                </div>
            </div>
        </div>
    )
}

export default SearchScreen
