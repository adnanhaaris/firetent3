import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { FaPenToSquare, FaTrash } from 'react-icons/fa6';

function TenantList() {
    const [tenants, setTenants] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchTenants = async () => {
            const response = await axios.get('http://localhost:5000/api/tenants');
            setTenants(response.data);
        };
        fetchTenants();
    }, []);

    const deleteTenant = async (id) => {
        const isConfirmed = window.confirm("Are you sure you want to delete this tenant?");
        
        if (isConfirmed) {
            try {
                await axios.delete(`http://localhost:5000/api/tenants/${id}`);
                setTenants(tenants.filter(tenant => tenant._id !== id));
            } catch (err) {
                console.error(err);
            }
        }
    };
    

    return (
        <div className="max-w-4xl mx-auto">
            <table className="min-w-full bg-white">
                <thead>
                    <tr>
                        <th className="py-2">Name</th>
                        <th className="py-2">Email</th>
                        <th className="py-2">Phone</th>
                        <th className="py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tenants.map(tenant => (
                        <tr key={tenant._id}>
                            <td className="border px-4 py-2">{tenant.name}</td>
                            <td className="border px-4 py-2">{tenant.email}</td>
                            <td className="border px-4 py-2">{tenant.phone}</td>
                            <td className="border px-4 py-2">
                                <div className="flex items-center space-x-2">
                                    <Link to={`/edit/${tenant._id}`} className="bg-yellow-500 text-white px-4 py-2 rounded">
                                        <FaPenToSquare />
                                    </Link>

                                    <button onClick={() => deleteTenant(tenant._id)} className="bg-red-500 text-white px-4 py-2 rounded">
                                        <FaTrash />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TenantList;
