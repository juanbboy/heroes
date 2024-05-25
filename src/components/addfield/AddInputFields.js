import { useEffect, useState } from "react";
import { useForm } from "../../hooks/useForm";
import { Table } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const AddInputFields = ({ crudo, tit_tabla }) => {

  const params = useParams()

  const [talla, setTalla] = useState([
    {
      uno: '',
      dos: '',
      tres: '',
      cuatro: ''
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
    } if (tit_tabla) {
      setTalla(tit_tabla)
    }
  }, [params.id])

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
    e.preventDefault();
    await axios.put(`http://localhost:4002/api/update-desarrollo/${params.id}`, { tit_tabla: talla, crudo: formValues })
      .then(res => {
        console.log(res);
        console.log(res.data);
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
    handleInputChange(data)
  }

  return (
    <div>
      <form onSubmit={update}>
        <Table className="table" size="sm" responsive="sm">
          {talla.map((talla) => (
            <thead className="text-center" >
              <th></th>
              <th colspan="2" >
                <input
                  className="form-control form-control-sm text-center p-0 m-0 "
                  name='uno'
                  onChange={e => InputChange(e)}
                  value={talla.uno}
                  style={{ border: "0", fontWeight: "bold" }}
                />
              </th>
              <th colspan="2">
                <input
                  className="form-control form-control-sm text-center p-0 m-0 "
                  name='dos'
                  onChange={e => InputChange(e)}
                  value={talla.dos}
                  style={{ border: "0", fontWeight: "bold" }}
                />
              </th>
              <th colspan="2">
                <input
                  className="form-control form-control-sm text-center p-0 m-0 "
                  name='tres'
                  onChange={e => InputChange(e)}
                  value={talla.tres}
                  style={{ border: "0", fontWeight: "bold" }}
                />
              </th>
              <th colspan="2">
                <input
                  className="form-control form-control-sm text-center p-0 m-0"
                  name='cuatro'
                  onChange={e => InputChange(e)}
                  value={talla.cuatro}
                  style={{ border: "0", fontWeight: "bold" }}
                />
              </th>

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
                {/* <button onClick={() => removeFields(index)}>Remove</button> */}

              </tr>
            ))}
          </tbody>
        </Table>
      </form>
      <button onClick={addFields}>Add More...</button>
      <button onClick={update}>Guardar</button>
    </div>
  );
}

export default AddInputFields;







