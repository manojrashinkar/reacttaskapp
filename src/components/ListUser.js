// import axios from "axios"
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// export default function ListUser() {

//     const [users, setUsers] = useState([]);
//     useEffect(() => {
//         getUsers();
//     }, []);

//     function getUsers() {
//         axios.get('http://localhost:80/api/users/').then(function(response) {
//             console.log(response.data);
//             setUsers(response.data);
//         });
//     }

//     const deleteUser = (id) => {
//         axios.delete(`http://localhost:80/api/user/${id}/delete`).then(function(response){
//             console.log(response.data);
//             getUsers();
//         });
//     }
//     return (
//         <div className="container"> 
//             <h1>List Users</h1>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>#</th>
//                         <th>Name</th>
//                         <th>Email</th>
//                         <th>Mobile</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {users.map((user, key) =>
//                         <tr key={key}>
//                             <td>{user.id}</td>
//                             <td>{user.name}</td>
//                             <td>{user.email}</td>
//                             <td>{user.mobile}</td>
//                             <td>
//                                 <Link to={`user/${user.id}/edit`} style={{marginRight: "10px"}}>Edit</Link>
//                                 <button onClick={() => deleteUser(user.id)}>Delete</button>
//                             </td>
//                         </tr>
//                     )}
                    
//                 </tbody>
//             </table>
//         </div>
//     )
// }
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ListUser.css"; // Import CSS file for styling

export default function ListUser() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    function getUsers() {
        axios.get('http://localhost:80/api/users/').then(function(response) {
            console.log(response.data);
            setUsers(response.data);
        });
    }

    const deleteUser = (id) => {
        axios.delete(`http://localhost:80/api/user/${id}/delete`).then(function(response){
            console.log(response.data);
            getUsers();
        });
    };

    const handleCheckboxChange = (id) => {
        setUsers(users.map(user => {
            if (user.id === id) {
                return { ...user, checked: !user.checked };
            }
            return user;
        }));
    };

    return (
        <div className="container"> 
            <h1>List Users</h1>
            <table className="user-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Task Name</th>
                        <th>By Email</th>
                        <th>By Mobile</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, key) =>
                        <tr key={key}>
                            <td>{user.id}</td>
                            <td className="name-column">
                                <input 
                                    type="checkbox" 
                                    checked={user.checked || false} 
                                    onChange={() => handleCheckboxChange(user.id)} 
                                />
                                <span className={user.checked ? 'checked' : ''}>{user.name}</span>
                            </td>
                            <td>{user.email}</td>
                            <td>{user.mobile}</td>
                            <td>
                                <Link to={`user/${user.id}/edit`} className="action-link">Edit</Link>
                                <button onClick={() => deleteUser(user.id)} className="action-button">Delete</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
