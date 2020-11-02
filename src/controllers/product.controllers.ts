import { Request, Response } from 'express';
import Product from '../models/Product';
import { IProductModel } from '../models/interfaces/product.interface';
import Joi from '@hapi/joi';

const ProductSchema = Joi.object().keys({
    name: Joi.string().required(),
    description: Joi.string().max(500),
    price: Joi.number().required(),
    imageUrl: Joi.string().required()
})

export default class ProductController {
    private productModel: IProductModel;

    constructor() {
        this.productModel = Product;
    }

    getProducts = async (req: Request, res: Response): Promise<void> => {
        const products = await this.productModel.find();

        res.json(products);
    }

    createNewProduct = async (req: Request, res: Response): Promise<void> => {

        const validate = ProductSchema.validate(req.body);

        if(!validate.error) {
            const newProduct = new this.productModel(req.body);

            try {
                await newProduct.save();
                res.status(201).json({ message: 'Product created' });
            } catch (error) {
                res.status(500).json({ message: error });
            }
        } else {
            res.status(400).json({ message: validate.error });
        }
    }

    updateProduct = async (req: Request, res: Response): Promise<void> => {

        const validate = ProductSchema.validate(req.body);

        if(!validate.error) {
            const product = await this.productModel.findOne({ _id: req.params.id });

            if(product) {
                try {
                    await this.productModel.updateOne({ _id: req.params.id }, req.body);
                    res.status(201).json({ message: 'Product updated' });
                } catch (error) {
                    res.status(500).json({ message: error });
                }
            } else {
                res.status(404).json({ message: 'Product not exists' });
            }
        } else {
            res.status(400).json({ message: validate.error });
        }
    }

    deleteProduct = async (req: Request, res: Response): Promise<void> => {
        const product = await this.productModel.findOne({ _id: req.params.id });

        if(product) {
            try {
                await this.productModel.deleteOne({ _id: req.params.id });
                res.json({ message: 'Product deleted '});
            } catch (error) {
                res.status(500).json({ message: error });
            }
        } else {
            res.status(404).json({ message: 'Product not exists' });
        }
    }
}