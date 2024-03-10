import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const BrandSchema = new Schema(
    {
        name: {
            type: "String",
            required: "true"
        }
    },
);

export default mongoose.model('Brand', BrandSchema);