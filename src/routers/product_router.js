productController = require('../controllers/product_controller')
const userRouter = require('express').Router()

userRouter.get('/product', productController.get);
userRouter.post('/product', productController.post);
userRouter.put('/product/:id', productController.put);
userRouter.delete('/product/:id', productController.delete);

module.exports = userRouter;
