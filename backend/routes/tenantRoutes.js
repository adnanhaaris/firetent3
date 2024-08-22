import express from 'express'
const router = express.Router();
import Tenant from '../models/tenantModel.js';

// Create a new tenant
router.post('/', async (req, res) => {
    try {
        const tenant = new Tenant(req.body);
        await tenant.save();
        res.status(201).json(tenant);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Get all tenants
router.get('/', async (req, res) => {
    try {
        const tenants = await Tenant.find();
        res.json(tenants);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Get a single tenant by ID
router.get('/:id', async (req, res) => {
    try {
        const tenant = await Tenant.findById(req.params.id);
        res.json(tenant);
    } catch (err) {
        res.status(404).json({ error: err.message });
    }
});

// Update a tenant by ID
router.put('/:id', async (req, res) => {
    try {
        const tenant = await Tenant.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(tenant);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Delete a tenant by ID
router.delete('/:id', async (req, res) => {
    try {
        await Tenant.findByIdAndDelete(req.params.id);
        res.json({ message: 'Tenant deleted' });
    } catch (err) {
        res.status(404).json({ error: err.message });
    }
});

export default router;

