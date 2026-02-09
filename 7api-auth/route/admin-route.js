const express= require('expresss');
const router= express.Router();
const authMiddleware = require('../middleware/auth-middleware');
const adminController = require('../controller/admin-controller');  
router.post('/admin/login', adminController.login);
router.get('/admin/dashboard', authMiddleware, adminController.dashboard);
module.exports = router;
