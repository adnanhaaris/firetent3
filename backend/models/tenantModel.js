import mongoose from 'mongoose';

const tenantSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true }
});

export default mongoose.model('Tenant', tenantSchema);
