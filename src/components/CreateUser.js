// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// export default function ListUser() {
//     const navigate = useNavigate();

//     const [inputs, setInputs] = useState([]);

//     const handleChange = (event) => {
//         const name = event.target.name;
//         const value = event.target.value;
//         setInputs(values => ({...values, [name]: value}));
//     }
//     const handleSubmit = (event) => {
//         event.preventDefault();

//         axios.post('http://localhost:80/api/user/save', inputs).then(function(response){
//             console.log(response.data);
//             navigate('/');
//         });
        
//     }
//     return (
//         <div className="container"> 
//             <h1>Create TASK</h1>
//             <form onSubmit={handleSubmit}>
//                 <table cellSpacing="10">
//                     <tbody>
//                         <tr>
//                             <th>
//                                 <label>Task Name: </label>
//                             </th>
//                             <td>
//                                 <input type="text" name="name" onChange={handleChange} />
//                             </td>
//                         </tr>
//                         <tr>
//                             <th>
//                                 <label>Email: </label>
//                             </th>
//                             <td> 
//                                 <input type="text" name="email" onChange={handleChange} />
//                             </td>
//                         </tr>
//                         <tr>
//                             <th>
//                                 <label>Mobile: </label>
//                             </th>
//                             <td>
//                                 <input type="text" name="mobile" onChange={handleChange} />
//                             </td>
//                         </tr>
//                         <tr>
//                             <td colSpan="2" align ="right">
//                                 <button>Save</button>
//                             </td>
//                         </tr>
//                     </tbody>
//                 </table>
//             </form>
//         </div>
//     )
// }
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ListUser() {
    const navigate = useNavigate();

    const [inputs, setInputs] = useState({ name: "", email: "", mobile: "" });
    const [errors, setErrors] = useState({ name: "", email: "", mobile: "" });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputs({ ...inputs, [name]: value });
        setErrors({ ...errors, [name]: value ? "" : `${name} is required` });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Check if any input field is empty
        const hasErrors = Object.values(inputs).some((value) => value === "");
        if (hasErrors) {
            // Set errors for empty fields
            setErrors({
                name: inputs.name ? "" : "Name is required",
                email: inputs.email ? "" : "Email is required",
                mobile: inputs.mobile ? "" : "Mobile is required"
            });
            return; // Stop form submission if there are errors
        }

        axios.post('http://localhost:80/api/user/save', inputs)
            .then(function(response){
                console.log(response.data);
                navigate('/');
            });
    };

    return (
        <div className="container">
            <h1>Create TASK</h1>
            <form onSubmit={handleSubmit}>
                <table cellSpacing="10">
                    <tbody>
                        <tr>
                            <th>
                                <label>Task Name: </label>
                            </th>
                            <td>
                                <input type="text" name="name" value={inputs.name} onChange={handleChange} />
                                {errors.name && <div>{errors.name}</div>}
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Email: </label>
                            </th>
                            <td>
                                <input type="text" name="email" value={inputs.email} onChange={handleChange} />
                                {errors.email && <div>{errors.email}</div>}
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Mobile: </label>
                            </th>
                            <td>
                                <input type="text" name="mobile" value={inputs.mobile} onChange={handleChange} />
                                {errors.mobile && <div>{errors.mobile}</div>}
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2" align="right">
                                <button>Save</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
}
    