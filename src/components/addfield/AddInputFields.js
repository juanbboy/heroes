import { useState } from "react";
import { useForm } from "../../hooks/useForm";
import { Table } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

function App() {

  const params = useParams()

  const [formValues, handleInputChange, reset] = useForm(
    {
      detalle: '',
      cetme: '',
      plano: "",
      cetme1: '',
      plano1: "",
      cetme2: '',
      plano2: "",
      cetme3: '',
      plano3: "",
      id: params.id
    },
  )

  const { detalle,
    cetme,
    plano,
    cetme1,
    plano1,
    cetme2,
    plano2,
    cetme3,
    plano3,
    id } = formValues;


  // const handleFormChange = (event, index) => {
  //   let data = { ...formValues };
  //   data[index][event.target.name] = event.target.value;
  //   // handleInputChange(data);
  // }

  // const submit = async (e) => {
  //   e.preventDefault();
  //   console.log(formValues)
  //   await axios.put(`http://localhost:4002/api/update-desarrollo/${params.id}`, formValues)
  //     .then(res => {
  //       console.log(res);
  //       console.log(res.data);
  //       Swal.fire({
  //         icon: 'success',
  //         title: 'Actualizado',
  //         showConfirmButton: false,
  //         timer: 1200
  //       })
  //       // handleReturn()
  //     })
  // }

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(formValues)
    // axios.post(`https://desarrollonylon.vercel.app/api/regdesarrollo`, formValues)
    axios.post(`http://localhost:4002/api/regmedidas`, formValues)
      // axios.post(`http:///regdesarrollo`, formValues)
      // axios.post(`https://bakend.vercel.app/api/regneedle`, formValues)
      .then(res => {
        Swal.fire({
          icon: 'success',
          title: 'correcto',
          showConfirmButton: false,
          timer: 1200
        })
        // reset();
        // navigate("/needlelist")
      })
  }

  // const handleReturn = () => {
  //   navigate(-1)
  // }




  // const submit = (e) => {
  //   e.preventDefault();
  //   console.log(formValues)
  // }

  const addFields = () => {
    let object = {
      detalle: '',
      cetme: '',
      plano: "",
      cetme1: '',
      plano1: "",
      cetme2: '',
      plano2: "",
      cetme3: '',
      plano3: "",
    }

    handleInputChange([...formValues, object])
  }

  const removeFields = (index) => {
    let data = [...formValues];
    data.splice(index, 1)
    handleInputChange(data)
  }

  return (
    <div>
      <form onSubmit={handleRegister}>
        <Table striped hover size="sm" responsive="sm">
          <thead >
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
            <tr>
              {/* {formValues.map((form, index) => { */}
              return (
              <div >
                <td>
                  <input
                    className="form-control form-control-sm"
                    name='detalle'
                    onChange={event => handleInputChange(event)}
                    value={detalle}
                  />
                </td>
                <td>
                  <input
                    className="form-control form-control-sm"
                    name='cetme'
                    onChange={event => handleInputChange(event)}
                    value={cetme}
                  />
                </td>
                <td>
                  <input
                    className="form-control form-control-sm"
                    name='plano'
                    onChange={event => handleInputChange(event)}
                    value={plano}
                  />
                </td>
                <td>
                  <input
                    className="form-control form-control-sm"
                    name='cetme1'
                    onChange={event => handleInputChange(event)}
                    value={cetme1}
                  />
                </td>
                <td>
                  <input
                    className="form-control form-control-sm"
                    name='plano1'
                    onChange={event => handleInputChange(event)}
                    value={plano1}
                  />
                </td>
                <td>
                  <input
                    className="form-control form-control-sm"
                    name='cetme2'
                    onChange={event => handleInputChange(event)}
                    value={cetme2}
                  />
                </td>
                <td>
                  <input
                    className="form-control form-control-sm"
                    name='plano2'
                    onChange={event => handleInputChange(event)}
                    value={plano2}
                  />
                </td>
                <td>
                  <input
                    className="form-control form-control-sm"
                    name='cetme3'
                    onChange={event => handleInputChange(event)}
                    value={cetme3}
                  />
                </td>
                <td>
                  <input
                    className="form-control form-control-sm"
                    name='plano3'
                    onChange={event => handleInputChange(event)}
                    value={plano3}
                  />
                </td>
                {/* <button onClick={() => removeFields(index)}>Remove</button> */}
              </div>

              )
              {/* })} */}
            </tr>

          </tbody>
        </Table>
      </form>
      <button onClick={addFields}>Add More..</button>
      <br />
      <button onClick={handleRegister}>Submit</button>
    </div>
  );
}

export default App;



// export default function AddDynamicInputFields() {


//   const [inputs, setInputs] = useState([{
//     descripcion: "",
//     cetme: "",
//     plano: "",
//     cetme1: "",
//     plano1: "",
//     cetme2: "",
//     plano2: "",
//     cetme3: "",
//     plano3: "",
//   }]);



//   const handleAddInput = () => {
//     setInputs([...inputs, {
//       descripcion: "",
//       cetme: "",
//       plano: "",
//       cetme1: "",
//       plano1: "",
//       cetme2: "",
//       plano2: "",
//       cetme3: "",
//       plano3: "",
//     }]);
//   };

//   const handleInputChange = (event, index) => {
//     let data = [...inputs];
//     data[index][event.target.name] = event.target.value;
//     setInputs(inputs);
//   }

//   const handleDeleteInput = (index) => {
//     const newArray = [...inputs];
//     newArray.splice(index, 1);
//     setInputs(newArray);
//   };

//   console.log(inputs)

//   return (
//     <div className="container">

//       {inputs.map((item, index) => (
//         <div key={index} >
//           <td> <input
//             type="text"
//             className="form-control form-control-sm "
//             id="descripcion"
//             name="descripcion"
//             value={item.descripcion}
//             onChange={event => handleInputChange(event)}
//             required={true}
//             autoComplete="on"
//           /></td>
//           <td><input
//             type="text"
//             className="form-control form-control-sm "
//             id="cetme"
//             name="cetme"
//             value={item.cetme}
//             onChange={event => handleInputChange(event)}
//             required={true}
//             autoComplete="on"
//           /></td>
//           <td><input
//             type="text"
//             className="form-control form-control-sm "
//             id="plano"
//             name="plano"
//             value={item.plano}
//             onChange={event => handleInputChange(event)}
//             required={true}
//             autoComplete="on"
//           /></td>
//           <td><input
//             type="text"
//             className="form-control form-control-sm "
//             id="cetme1"
//             name="cetme1"
//             value={item.cetme1}
//             onChange={event => handleInputChange(event)}
//             required={true}
//             autoComplete="on"
//           /></td>
//           <td><input
//             type="text"
//             className="form-control form-control-sm "
//             id="plano1"
//             name="plano1"
//             value={item.plano1}
//             onChange={event => handleInputChange(event)}
//             required={true}
//             autoComplete="on"
//           /></td> <td><input
//             type="text"
//             className="form-control form-control-sm "
//             id="cetme2"
//             name="cetme2"
//             value={item.cetme2}
//             onChange={event => handleInputChange(event)}
//             required={true}
//             autoComplete="on"
//           /></td>
//           <td><input
//             type="text"
//             className="form-control form-control-sm "
//             id="plano2"
//             name="plano2"
//             value={item.plano2}
//             onChange={event => handleInputChange(event)}
//             required={true}
//             autoComplete="on"
//           /></td> <td><input
//             type="text"
//             className="form-control form-control-sm "
//             id="cetme3"
//             name="cetme3"
//             value={item.cetme3}
//             onChange={event => handleInputChange(event)}
//             required={true}
//             autoComplete="on"
//           /></td>
//           <td><input
//             type="text"
//             className="form-control form-control-sm "
//             id="plano3"
//             name="plano3"
//             value={item.plano3}
//             onChange={event => handleInputChange(event)}
//             required={true}
//             autoComplete="on"
//           /></td>


//           {inputs.length > 1 && (
//             <button onClick={() => handleDeleteInput(index)}>Delete</button>
//           )}
//           {index === inputs.length - 1 && (
//             <button onClick={() => handleAddInput()}>Add</button>
//           )}

//         </div>

//       )
//       )
//       }

//       <div className="body"> {JSON.stringify(inputs)} </div>
//     </div>
//   );
// }
