import React, { useState, useEffect } from 'react';
import TenantForm from '../components/TenantForm';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function EditTenant() {
    const { id } = useParams();
    const [tenant, setTenant] = useState(null);

    useEffect(() => {
        const fetchTenant = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/tenants/${id}`);
                setTenant(response.data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchTenant();
    }, [id]);

    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold mb-4">Edit Tenant</h1>
            {tenant && <TenantForm tenant={tenant} editMode={true} />}
        </div>
    );
}

export default EditTenant;
