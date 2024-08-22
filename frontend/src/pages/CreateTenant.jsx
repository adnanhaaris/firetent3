import React from 'react';
import TenantForm from '../components/TenantForm';

function CreateTenant() {
    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold mb-4">Create Tenant</h1>
            <TenantForm />
        </div>
    );
}

export default CreateTenant;
