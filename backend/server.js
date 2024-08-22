import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import bodyParser from 'body-parser';
import tenantRoutes from './routes/tenantRoutes.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/tenantdb', {
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use('/api/tenants', tenantRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
