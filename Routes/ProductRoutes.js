const express = require('express');
const router = express.Router();
const ProductsController = require('../Controllers/ProductsController');
const {
  IsItAuthenticatedMiddleware,
  AuthorizePermissionsMiddleware,
} = require('../Middlewares');

router.get('/products', ProductsController.FetchProducts);
router.get('/products/:id', ProductsController.FetchProduct);
router.post(
  '/protected',
  IsItAuthenticatedMiddleware,
  AuthorizePermissionsMiddleware('ADMIN'),
  ProductsController.ProtectedRoute
);
module.exports = router;
