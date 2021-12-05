const router = require('express').Router();

const authRoutes = require('./auth');
const userRoutes = require('./user');
const productRoutes = require('./product');
const categoryRoutes = require('./category');
const brandRoutes = require('./brand');
const cartRoutes = require('./cart');
const orderRoutes = require('./order');

// auth routes
router.use('/auth', authRoutes);

// user routes
router.use('/user', userRoutes);

// product routes
router.use('/product', productRoutes);

// category routes
router.use('/category', categoryRoutes);

// brand routes
router.use('/brand', brandRoutes);

// cart routes
router.use('/cart', cartRoutes);

// order routes
router.use('/order', orderRoutes);

module.exports = router;