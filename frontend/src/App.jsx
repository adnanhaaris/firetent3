import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import CreateTenant from './pages/CreateTenant';
import EditTenant from './pages/EditTenant';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/create",
        element: <CreateTenant />,
    },
    {
        path: "/edit/:id",
        element: <EditTenant />,
    }
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
