import { useEffect, useState } from "react";
import { Table } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useSelector } from "react-redux";

const AddInputFields = ({ crudo, tit_tabla, id, date }) => {
  const { uid } = useSelector(state => state.auth)
  const params = useParams()

  const [date1, setdate1] = useState(date)
  const [talla, setTalla] = useState([
    {
      uno: 'S',
      dos: 'M',
      tres: "L",
      cuatro: 'XL'
    }]
  )

  const [formValues, setformValues] = useState(
    [{
      detalle: '',
      cetme: '',
      plano: "",
      cetme1: '',
      plano1: "",
      cetme2: '',
      plano2: "",
      cetme3: '',
      plano3: "",
    }]
  )

  useEffect(() => {
    if (crudo) {
      setformValues(crudo)
    }
    if (tit_tabla.length !== 0) {
      setTalla(tit_tabla)
    }
    else {
      setTalla([{
        uno: 'S',
        dos: 'M',
        tres: "L",
        cuatro: 'XL',
      }])
    }

  }, [params.id, crudo, tit_tabla])




  const InputChange = (e) => {
    const list = [...talla];
    list[0][e.target.name] = e.target.value;
    setTalla(list);
    console.log(list)
  };

  const handleInputChange = (e, index) => {
    const list = [...formValues];
    list[index][e.target.name] = e.target.value;
    setformValues(list);
  };

  const update = async (e) => {
    const date = Date.now()
    e.preventDefault();
    await axios.put(`https://desarrollonylon.vercel.app/api/update-desarrollo/${params.id}`, { tit_tabla: talla, crudo: formValues, date: date })
      .then(res => {
        setdate1(date)
        Swal.fire({
          icon: 'success',
          title: 'Actualizado',
          showConfirmButton: false,
          timer: 1200
        })

      })
  }

  const addFields = () => {
    setformValues([...formValues, {
      detalle: '',
      cetme: '',
      plano: "",
      cetme1: '',
      plano1: "",
      cetme2: '',
      plano2: "",
      cetme3: '',
      plano3: "",
    }])
  }

  const removeFields = (index) => {
    let data = [...formValues];
    data.splice(index, 1)
    setformValues(data)
  }
  if (uid !== "nVWOi6EO3eNnNEKICTJGfg67bT83") return null

  return (
    <div >
      <form onSubmit={update}>
        <Table className="table" size="sm" responsive="sm"  >
          {talla.map((talla) => (
            <thead className="text-center" key={1} >
              <tr>
                <th></th>
                <th colSpan="2" >
                  <input
                    className="form-control form-control-sm text-center p-0 m-0 "
                    name='uno'
                    onChange={e => InputChange(e)}
                    value={talla.uno}
                    style={{ border: "0", fontWeight: "bold" }}
                  />
                </th>
                <th colSpan="2">
                  <input
                    className="form-control form-control-sm text-center p-0 m-0 "
                    name='dos'
                    onChange={e => InputChange(e)}
                    value={talla.dos}
                    style={{ border: "0", fontWeight: "bold" }}
                  />
                </th>
                <th colSpan="2">
                  <input
                    className="form-control form-control-sm text-center p-0 m-0 "
                    name='tres'
                    onChange={e => InputChange(e)}
                    value={talla.tres}
                    style={{ border: "0", fontWeight: "bold" }}
                  />
                </th>
                <th colSpan="2">
                  <input
                    className="form-control form-control-sm text-center p-0 m-0"
                    name='cuatro'
                    onChange={e => InputChange(e)}
                    value={talla.cuatro}
                    style={{ border: "0", fontWeight: "bold" }}
                  />
                </th>
              </tr>
            </thead>
          ))}
          <thead className="text-center p-0 m-0">
            <tr>
              <th>Descripcion</th>
              <th>Cetme</th>
              <th>plano</th>
              <th>Cetme</th>
              <th>plano</th>
              <th>Cetme</th>
              <th>plano</th>
              <th>Cetme</th>
              <th>plano</th>
            </tr>
          </thead>
          <tbody>
            {formValues.map((form, index) => (
              <tr key={index} >
                <td >
                  <input
                    className="form-control form-control-sm "
                    name='detalle'
                    onChange={e => handleInputChange(e, index)}
                    value={form.detalle}
                    style={{ border: "0" }}
                  />
                </td>
                <td>
                  <input
                    className="form-control form-control-sm text-center"
                    name='cetme'
                    onChange={e => handleInputChange(e, index)}
                    value={form.cetme}
                    style={{ border: "0" }}
                  />
                </td>
                <td>
                  <input
                    className="form-control form-control-sm text-center"
                    name='plano'
                    onChange={e => handleInputChange(e, index)}
                    value={form.plano}
                    style={{ border: "0" }}
                  />
                </td>
                <td>
                  <input
                    className="form-control form-control-sm text-center"
                    name='cetme1'
                    onChange={e => handleInputChange(e, index)}
                    value={form.cetme1}
                    style={{ border: "0" }}
                  />
                </td>
                <td>
                  <input
                    className="form-control form-control-sm text-center"
                    name='plano1'
                    onChange={e => handleInputChange(e, index)}
                    value={form.plano1}
                    style={{ border: "0" }}
                  />
                </td>
                <td>
                  <input
                    className="form-control form-control-sm text-center"
                    name='cetme2'
                    onChange={e => handleInputChange(e, index)}
                    value={form.cetme2}
                    style={{ border: "0" }}
                  />
                </td>
                <td>
                  <input
                    className="form-control form-control-sm text-center"
                    name='plano2'
                    onChange={e => handleInputChange(e, index)}
                    value={form.plano2}
                    style={{ border: "0" }}
                  />
                </td>
                <td>
                  <input
                    className="form-control form-control-sm text-center"
                    name='cetme3'
                    onChange={e => handleInputChange(e, index)}
                    value={form.cetme3}
                    style={{ border: "0" }}
                  />
                </td>
                <td>
                  <input
                    className="form-control form-control-sm text-center"
                    name='plano3'
                    onChange={e => handleInputChange(e, index)}
                    value={form.plano3}
                    style={{ border: "0" }}
                  />
                </td>
                <td>
                  <svg className='icon bi bi-trash3' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" onClick={() => removeFields(index)}>
                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                  </svg>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </form>
      <button onClick={addFields}>Add More...</button>
      <button onClick={update}>Save</button>
      <p>Guardado: {new Date(date1).toLocaleString()}</p>
    </div>
  );
}

export default AddInputFields;







