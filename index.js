import express from 'express';
import mongoose from 'mongoose';

import routesProducts from './routes/products.routes.js'
import routesBrands from './routes/brands.routes.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', routesProducts);
app.use('/api',routesBrands );


// Run server
app.listen(port, () => {
    console.log(`server running on port ${port}`);
});

// Connection with database
mongoose.connect('mongodb://localhost:27017/sgv')
    .then (data => {console.log('db is conected')})
    .catch((error) => console.log('ther is an error connecting with db'));
