import React, { useState } from 'react';
import axios from 'axios';

const UploadFile = () => {

    const [file, setFile] = useState([]);
    const CLOUD_NAME = "dr64wmtkm"
    const UPLOAD_PRESET = "ml_default"

    const handleFileChange = (e) => {
        setFile([...file, ...Array.from(e.target.files)]);

    };

    const handleUpload = () => {
        console.log(file)
        const formData = new FormData();
        file.forEach(async (file) => {
            console.log(file)
            formData.append('file', file);
            formData.append("upload_preset", UPLOAD_PRESET)
            console.log(formData)


            try {
                console.log(formData)

                const response = await axios.post(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, formData,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        },

                    })
                console.log(response.data);
            } catch (error) {
                console.error('Error uploading images:', error);
                // Handle error
            }
        });
    };

    return (
        <div>
            <div className="col-3 align-self-center">
                {file[0] ? <img alt="Preview" id='id' className="card-img-top m-1" src={URL.createObjectURL(file[0])} /> : <img src={`/assets/photo.jpg`} className="card-img-top m-1" alt={"id"} />}
                <input type="file" onChange={handleFileChange}></input>
                {file[1] ? <img alt="Preview" id='id1' className="card-img-top m-1" src={URL.createObjectURL(file[1])} /> : <img src={`/assets/photo.jpg`} className="card-img-top m-1" alt={"id"} />}
                <input type="file" onChange={handleFileChange}></input>
                <button onClick={handleUpload}>subir</button>
            </div>
        </div >
    );
};






//     const [file, setFile] = useState(null);

//     const CLOUD_NAME = "dr64wmtkm"
//     const UPLOAD_PRESET = "ml_default"

//     const upload = async () => {
//         const data = new FormData();
//         data.append("file", file);
//         data.append("upload_preset", UPLOAD_PRESET);
//         const response = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
//             { method: "POST", body: data })
//         const data1 = await response.json()
//         console.log(data1) // reemplazar con un mensaje de éxito o la acción deseada
//     };


//     return (
//         <div>
//             <div>
//                 <input type="file" onChange={(e) => setFile(e.target.files[0])}></input>
//                 {file ? <img alt="Preview" height="200" src={URL.createObjectURL(file)} /> : null}
//                 <button onClick={upload}>Upload</button>
//             </div>
//             {/* <br /> */}
//             {/* <div> */}
//             {/* <input type="file" name='img2' onChange={(e) => setFile(e.target.files)}></input> */}
//             {/* {file ? <img alt="Preview" height="60" src={URL.createObjectURL(file)} /> : null} */}
//             {/* <button onClick={upload}>Upload</button> */}
//             {/* <div>
//                 <img src={`https://res.cloudinary.com/${CLOUD_NAME}/DJ02C3-1_-_DJ02D4_kg5ilx`} alt="id" />
//             </div> */}
//             {/* </div> */}
//         </div >
//     );
// };

export default UploadFile;