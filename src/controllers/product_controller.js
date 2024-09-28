const { Product } = require('../models/index')
const { User } = require('../models/index')
module.exports = {
    get: async (req, res) => {
        try {
            const { userId } = req.body; // Ambil userId dari body

            // Validasi userId
            if (!userId) {
                return res.status(400).json({
                    errorCode: 400,
                    message: 'userId is required!',
                });
            }

            // Ambil produk berdasarkan userId
            const products = await Product.findAll({
                where: { userId }, // Filter produk berdasarkan userId
                include: [{ model: User, as: 'user' }],
            });

            // Cek jika tidak ada produk ditemukan
            if (products.length === 0) {
                return res.status(404).json({
                    errorCode: 404,
                    message: 'No products found for this user!',
                });
            }

            return res.status(200).json({
                errorCode: 200,
                message: 'Products retrieved successfully!',
                data: products,
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                errorCode: 500,
                message: error.message,
            });
        }
    },
    post: async (req, res) => {
        try {
            const { name, price, userId } = req.body; // Ambil userId dari body
            // Validasi input
            if (!name || !price || !userId) {
                return res.status(400).json({
                    errorCode: 400,
                    message: 'Name, price, and userId are required!',
                });
            }

            // Buat produk baru
            const product = await Product.create({ name, price, userId });
            return res.status(201).json({
                errorCode: 201,
                message: 'Product created successfully!',
                data: product,
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                errorCode: 500,
                message: error.message,
            });
        }
    },
    put: async (req, res) => {
        try {
            const { id } = req.params; // Ambil ID produk dari parameter
            const { name, price, userId } = req.body; // Ambil data baru dari body

            // Cari produk berdasarkan ID
            const product = await Product.findByPk(id);
            if (!product) {
                return res.status(404).json({
                    errorCode: 404,
                    message: 'Product not found!',
                });
            }

            // Validasi userId
            if (product.userId !== parseInt(userId)) {
                console.log(product.userId, userId)
                return res.status(403).json({
                    errorCode: 403,
                    message: 'You cannot update this product!',
                });
            }

            // Update produk
            await product.update({ name, price });
            return res.status(200).json({
                errorCode: 200,
                message: 'Product updated successfully!',
                data: product,
            });
        } catch (error) {
            return res.status(500).json({
                errorCode: 500,
                message: error.message,
            });
        }
    },
    delete: async (req, res) => {
        try {
            const { id } = req.params; // Ambil ID produk dari parameter
            const { userId } = req.body; // Ambil userId dari body

            // Cari produk berdasarkan ID
            const product = await Product.findByPk(id);
            if (!product) {
                return res.status(404).json({
                    errorCode: 404,
                    message: 'Product not found!',
                });
            }

            // Validasi userId
            if (product.userId !== parseInt(userId)) {
                return res.status(403).json({
                    errorCode: 403,
                    message: 'You cannot delete this product!',
                });
            }

            // Hapus produk
            await product.destroy();
            return res.status(200).json({
                errorCode: 200,
                message: 'Product deleted successfully!',
            });
        } catch (error) {
            return res.status(500).json({
                errorCode: 500,
                message: error.message,
            });
        }
    }
}