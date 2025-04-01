import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';

const UploadFile = () => {

    const [data, setData] = useState()
    const [datos, setDatos] = useState()

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get('https://desarrollonylon.vercel.app/api/maestro');
            setDatos(res.data);
            setData(res.data);
        };
        fetchData();
    }, []);


    const searcher = (e) => {
        // setresults(data.filter((dato) => dato.name.toLowerCase().includes(e.target.value.toLocaleLowerCase()) || dato.obs.toLowerCase().includes(e.target.value.toLocaleLowerCase()) || dato.date.toLowerCase().includes(e.target.value.toLocaleLowerCase())))
        setData(datos.filter((dato) => dato.COD.toLowerCase().includes(e.target.value.toLocaleLowerCase()) || dato.NOM.toLowerCase().includes(e.target.value.toLocaleLowerCase())))

    }


    if (!data) return null;

    return (
        <div>
            <form >
                <div className='caja p-1'>
                    <div className="row mb-3 justify-content-start">
                        <div className="col-2">
                            <label htmlFor="search" className="col-form-label"><h5>Search</h5></label>
                        </div>
                        <div className="row ">
                            <div>
                                <input onChange={searcher} id="search" type="text" placeholder='Search' className='form-control col-sm-4' />
                            </div>
                        </div>
                    </div>
                </div>
            </form >
            <Table striped hover size="sm" responsive="sm" >
                <thead >
                    <tr>
                        <th>Codigo</th>
                        <th>Descripcion</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((data) =>
                        <tr key={data._id}>
                            <td>{data.COD}</td>
                            <td>{data.NOM}</td>
                        </tr>
                    )}

                </tbody>
            </Table >

        </div>

    );


};

export default UploadFile;