# REST API for products in TypeScript

## Usage

First is needed install all dependencies...

 
```bash
$ npm run install
```
... and then run.
```bash
$ npm run dev
```
If you want compile to ECMAScript 5 then run ...
```bash
$ npm run build
```
... and start.
```bash
$ npm start
```
Server is listening in port ``5000`` for default.
## Endpoints
### Obtain all products
```GET http://localhost:5000/api/products```
### Create new product
```POST http://localhost:5000/api/products/create```
Need pass JSON object:
```json
{
	"name": "Example name",
	"description": "Example description (optional)",
	"price": 100,
	"imageUrl": "http://imageurl.example"
}
```
### Update product
```PUT http://localhost:5000/api/products/update/:id```
Need pass JSON object:
```json
{
	"name": "Example name",
	"description": "Example description (optional)",
	"price": 100,
	"imageUrl": "http://imageurl.example"
}
```
### Delete product
```DELETE http://localhost:5000/api/products/delete/:id```