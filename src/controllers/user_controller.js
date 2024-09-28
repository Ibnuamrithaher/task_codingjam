const { User } = require('../models/index')
module.exports = {
    get: async (req, res) => {
        try {
            const user = await User.findAll()
            return res.send({
                errorCode: 200,
                message: 'Data all user !',
                data: user
            })
        } catch (error) {
            return res.send({
                errorCode: 500,
                message: error.message
            })
        }
    },
    post: async (req, res) => {
        try {
            const { name, username, password, ruanganId } = req.body;
            if (!name || !username || !password || !ruanganId) {
                return res.send({
                    errorCode: 400,
                    message: 'Name, username,password and ruanganId are required!'
                });
            }
            const user = await User.create({ name, username, password, ruanganId });
            return res.send({
                errorCode: 201,
                message: 'User created successfully!',
                data: user
            });
        } catch (error) {
            return res.send({
                errorCode: 500,
                message: error.message
            });
        }
    },
    put: async (req, res) => {
        try {
            const { id } = req.params;
            const { name, username, password, ruanganId } = req.body;
            if (!name || !username || !password || !ruanganId) {
                return res.send({
                    errorCode: 400,
                    message: 'Name, email,password and ruanganId are required!'
                });
            }
            const user = await User.findByPk(id);
            if (!user) {
                return res.send({
                    errorCode: 404,
                    message: 'User not found!'
                });
            }
            await user.update({ name, username, password, ruanganId });
            return res.send({
                errorCode: 200,
                message: 'User updated successfully!',
                data: user
            });
        } catch (error) {
            return res.send({
                errorCode: 500,
                message: error.message
            });
        }
    },
    delete: async (req, res) => {
        try {
            const { id } = req.params;
            const user = await User.findByPk(id);
            if (!user) {
                return res.send({
                    errorCode: 404,
                    message: 'User not found!'
                });
            }
            await user.destroy();
            return res.send({
                errorCode: 200,
                message: 'User deleted successfully!'
            });
        } catch (error) {
            return res.send({
                errorCode: 500,
                message: error.message
            });
        }
    }
}