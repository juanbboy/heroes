import { useState } from "react";
import { useForm } from "../../hooks/useForm";

export default function AddDynamicInputFields() {

  const [formValues, handleInputChange, reset] = useForm({
    descripcion: "",
    cetme: "",
    plano: "",
    cetme1: "",
    plano1: "",
    cetme2: "",
    plano2: "",
    cetme3: "",
    plano3: "",

  });

  const { descripcion, cetme, plano, cetme1, plano1, cetme2, plano2, cetme3, plano3 } = formValues;

  const [inputs, setInputs] = useState([{
    descripcion: "",
    cetme: "",
    plano: "",
    cetme1: "",
    plano1: "",
    cetme2: "",
    plano2: "",
    cetme3: "",
    plano3: "",
  }]);



  const handleAddInput = () => {
    setInputs([...inputs, {
      descripcion: "",
      cetme: "",
      plano: "",
      cetme1: "",
      plano1: "",
      cetme2: "",
      plano2: "",
      cetme3: "",
      plano3: "",
    }]);
  };



  // const handleChange = (event, index) => {
  //   let { name, value } = event.target;
  //   let onChangeValue = [...inputs];
  //   onChangeValue[index][name] = value;
  //   setInputs(onChangeValue);
  // };

  const handleDeleteInput = (index) => {
    const newArray = [...inputs];
    newArray.splice(index, 1);
    setInputs(newArray);
  };

  console.log(formValues)

  return (
    <div className="container">

      {inputs.map((item, index) => (
        <div key={index} >
          <table striped hover size="sm" responsive="sm">
            <tbody>
              <tr>
                <td> <input
                  type="text"
                  className="form-control form-control-sm "
                  id="descripcion"
                  name="descripcion"
                  value={descripcion}
                  onChange={event => handleInputChange(event, index)}
                  required={true}
                  autoComplete="on"
                /></td>
                <td><input
                  type="text"
                  className="form-control form-control-sm "
                  id="cetme"
                  name="cetme"
                  value={cetme}
                  onChange={handleInputChange}
                  required={true}
                  autoComplete="on"
                /></td>
                <td><input
                  type="text"
                  className="form-control form-control-sm "
                  id="plano"
                  name="plano"
                  value={plano}
                  onChange={handleInputChange}
                  required={true}
                  autoComplete="on"
                /></td>
                <td><input
                  type="text"
                  className="form-control form-control-sm "
                  id="cetme1"
                  name="cetme1"
                  value={cetme1}
                  onChange={handleInputChange}
                  required={true}
                  autoComplete="on"
                /></td>
                <td><input
                  type="text"
                  className="form-control form-control-sm "
                  id="plano1"
                  name="plano1"
                  value={plano1}
                  onChange={handleInputChange}
                  required={true}
                  autoComplete="on"
                /></td> <td><input
                  type="text"
                  className="form-control form-control-sm "
                  id="cetme2"
                  name="cetme2"
                  value={cetme2}
                  onChange={handleInputChange}
                  required={true}
                  autoComplete="on"
                /></td>
                <td><input
                  type="text"
                  className="form-control form-control-sm "
                  id="plano2"
                  name="plano2"
                  value={plano2}
                  onChange={handleInputChange}
                  required={true}
                  autoComplete="on"
                /></td> <td><input
                  type="text"
                  className="form-control form-control-sm "
                  id="cetme3"
                  name="cetme3"
                  value={cetme3}
                  onChange={handleInputChange}
                  required={true}
                  autoComplete="on"
                /></td>
                <td><input
                  type="text"
                  className="form-control form-control-sm "
                  id="plano3"
                  name="plano3"
                  value={plano3}
                  onChange={handleInputChange}
                  required={true}
                  autoComplete="on"
                /></td>
              </tr>
              {/* ))} */}
            </tbody>
          </table>
          {inputs.length > 1 && (
            <button onClick={() => handleDeleteInput(index)}>Delete</button>
          )}
          {index === inputs.length - 1 && (
            <button onClick={() => handleAddInput()}>Add</button>
          )}

        </div>

      )
      )
      }

      <div className="body"> {JSON.stringify(formValues)} </div>
    </div>
  );
}
