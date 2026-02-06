// const authenticateToken = (req, res, next) => {
//   const authHeader = req.headers['authorization'];
//   const token = authHeader && authHeader.split(' ')[1];

//   if (!token) {
//     return res.status(401).json({ message: 'Access token required' });
//   }

//   // In a real app, you would verify the token against a database or secret key
//   req.user = { id: 'user123' }; // Mock user data for demonstration
//   next();
// };

// module.exports = authenticateToken;

const jwt = require('jsonwebtoken');

const authmiddlware = async (req, res, next) => {
    try {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        if (!token) {
            return res.status(401).json({ success: false, message: 'Access token required' });
        }   
        
        // Verify the JWT token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (e) {
        console.error('Error occurred:', e);
        return res.status(401).json({ success: false, message: 'Invalid or expired token' });
    }   
};

module.exports = authmiddlware;