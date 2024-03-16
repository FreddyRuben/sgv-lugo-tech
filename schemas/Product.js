import mongoose from 'mongoose';

const { Schema } = mongoose

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    brandId: {
        type: String,
        required: true,
        ref: 'Brand'
    }

});

export default mongoose.model('Product', productSchema);