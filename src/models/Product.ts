import { Schema, model } from 'mongoose';
import { IProduct, IProductModel } from './interfaces/product.interface';

const ProductSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    imageUrl: { type: String, required: true }
}, 
{
    versionKey: false,
    timestamps: true 
})

export default <IProductModel>model<IProduct>('Product', ProductSchema);
