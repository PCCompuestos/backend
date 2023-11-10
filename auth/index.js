const jwt = require('jsonwebtoken');

// Middleware to verify JWT token
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  if (!token.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Invalid token format' });
  }

  const tokenValue = token.split(' ')[1];

  jwt.verify(tokenValue, 'SECRET_KEY', (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid token' });
    }

    // You can also attach the decoded user information to the request for use in later middleware or route handlers
    req.user = decoded;
    next();
  });
}

module.exports = {
  verifyToken
}