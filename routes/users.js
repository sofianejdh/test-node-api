const express = require ('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!'
    });
})

// Import user controller
var userController = require('../controllers/userController');

// User routes
router.route('/users')
    .get(userController.index)
    .post(userController.new);

router.route('/user/:user_id')
    .get(userController.view)
    .patch(userController.update)
    .put(userController.update)
    .delete(userController.delete);

// Export API routes
module.exports = router;