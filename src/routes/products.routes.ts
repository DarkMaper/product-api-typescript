import { Router } from 'express';
import ProductController from '../controllers/product.controllers';

export class ProductRoute {

    private productController: ProductController;
    public router: Router;

    constructor() {
        this.productController = new ProductController();
        this.router = Router();
        this.initRoutes();
    }

    private initRoutes() {
        this.router.get('/', this.productController.getProducts);
        this.router.post('/create', this.productController.createNewProduct);
        this.router.put('/update/:id', this.productController.updateProduct);
        this.router.delete('/delete/:id', this.productController.deleteProduct);
    }
}