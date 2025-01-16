/**
 * **React**:
   - Crea un componente funcional llamado `UserList` que obtenga datos de una API y muestre una lista de usuarios con sus nombres y correos electrónicos.
   - Implementa una funcionalidad de búsqueda que permita filtrar los usuarios por nombre.
 */
import React, { useEffect, useState } from 'react';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const apiUser = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users/');
            if (!response.ok) {
                throw new Error('Error al obtener los usuarios');
            }
            const data = await response.json();
            return data;
        } catch (err) {
            throw new Error(err.message);
        }
    };

    const fetchData = async () => {
        setLoading(true);
        try {
            const data = await apiUser();
            setUsers(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    async function searchUser(name) {
        if (name === "") {
            fetchData();
        } else {
            const data = await apiUser();
            /*let resultUser = data.filter((x) => x.name.toUpperCase() === name.toUpperCase()); //Para una búsqueda exacta sin importar la entrada en Mayuscula o Minuscula*/
            let resultUser = data.filter((x) => x.name.toLowerCase().includes(name.toLowerCase())); //Para una búsqueda like datos que coincidan con un patrón específico
            setUsers(resultUser);
        }
    }

    useEffect(() => {
        fetchData(); // eslint-disable-next-line
    }, []);


    if (loading) {
        return (
            <div className="center-element-screen">
                <p>Cargando...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="center-element-screen">
                <p>Error: {error}</p>
            </div>
        );
    }

    return (
        <div>
            <h2 className='title-component'><img src={'/user.png'} className='user-img' alt="imagen-user"></img> List User </h2>
            <label>
                <span className='lb-input'>Search user:</span>
                <input onChange={(e) => searchUser(e.target.value)} />
            </label>

            <ul>
                {
                    users.length > 0 ? (
                        users.map(user => (
                            <li key={user.id}>
                                <label className='lb-name'>{user.name}: </label>
                                <label>{user.email}</label>
                            </li>
                        ))
                    ) : <li>No se encontraron usuarios con ese criterio de búsqueda</li>
                }
            </ul>
        </div>
    );
};

export default UserList;