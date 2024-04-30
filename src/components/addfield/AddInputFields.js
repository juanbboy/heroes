import { useState } from "react";
import { useForm } from "../../hooks/useForm";


function App() {
  const [formFields, setFormFields] = useState([
    { name: '', age: '' },
  ])

  const handleFormChange = (event, index) => {
    let data = [...formFields];
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
  }

  const submit = (e) => {
    e.preventDefault();
    console.log(formFields)
  }

  const addFields = () => {
    let object = {
      name: '',
      age: ''
    }

    setFormFields([...formFields, object])
  }

  const removeFields = (index) => {
    let data = [...formFields];
    data.splice(index, 1)
    setFormFields(data)
  }

  return (
    <div className="App">
      <form onSubmit={submit}>
        {formFields.map((form, index) => {
          return (
            <div key={index}>
              <input
                name='name'
                placeholder='Name'
                onChange={event => handleFormChange(event, index)}
                value={form.name}
              />
              <input
                name='age'
                placeholder='Age'
                onChange={event => handleFormChange(event, index)}
                value={form.age}
              />
              <button onClick={() => removeFields(index)}>Remove</button>
            </div>
          )
        })}
      </form>
      <button onClick={addFields}>Add More..</button>
      <br />
      <button onClick={submit}>Submit</button>
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
//             onChange={event => handleInputChange(event, index)}
//             required={true}
//             autoComplete="on"
//           /></td>
//           <td><input
//             type="text"
//             className="form-control form-control-sm "
//             id="cetme"
//             name="cetme"
//             value={item.cetme}
//             onChange={event => handleInputChange(event, index)}
//             required={true}
//             autoComplete="on"
//           /></td>
//           <td><input
//             type="text"
//             className="form-control form-control-sm "
//             id="plano"
//             name="plano"
//             value={item.plano}
//             onChange={event => handleInputChange(event, index)}
//             required={true}
//             autoComplete="on"
//           /></td>
//           <td><input
//             type="text"
//             className="form-control form-control-sm "
//             id="cetme1"
//             name="cetme1"
//             value={item.cetme1}
//             onChange={event => handleInputChange(event, index)}
//             required={true}
//             autoComplete="on"
//           /></td>
//           <td><input
//             type="text"
//             className="form-control form-control-sm "
//             id="plano1"
//             name="plano1"
//             value={item.plano1}
//             onChange={event => handleInputChange(event, index)}
//             required={true}
//             autoComplete="on"
//           /></td> <td><input
//             type="text"
//             className="form-control form-control-sm "
//             id="cetme2"
//             name="cetme2"
//             value={item.cetme2}
//             onChange={event => handleInputChange(event, index)}
//             required={true}
//             autoComplete="on"
//           /></td>
//           <td><input
//             type="text"
//             className="form-control form-control-sm "
//             id="plano2"
//             name="plano2"
//             value={item.plano2}
//             onChange={event => handleInputChange(event, index)}
//             required={true}
//             autoComplete="on"
//           /></td> <td><input
//             type="text"
//             className="form-control form-control-sm "
//             id="cetme3"
//             name="cetme3"
//             value={item.cetme3}
//             onChange={event => handleInputChange(event, index)}
//             required={true}
//             autoComplete="on"
//           /></td>
//           <td><input
//             type="text"
//             className="form-control form-control-sm "
//             id="plano3"
//             name="plano3"
//             value={item.plano3}
//             onChange={event => handleInputChange(event, index)}
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
