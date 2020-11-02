import {Document, Model} from 'mongoose';

interface IProductDocument extends Document {
    name: string,
    description: string,
    price: number,
    imageUrl: string
}

export interface IProduct extends IProductDocument {}

export interface IProductModel extends Model<IProduct> {}