import React from 'react';
import TenantList from '../components/TenantList';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold mb-4">Tenants</h1>
            <Link to="/create" className="bg-green-500 text-white px-4 py-2 rounded mb-4 inline-block">Add Tenant</Link>
            <TenantList />
        </div>
    );
}

export default Home;
