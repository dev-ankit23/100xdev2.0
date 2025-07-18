const jwt = require("jsonwebtoken");
const JWT_SECERT = "ankithello";

function auth(req, res, next) {
  // Get token from Authorization header
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({
      message:
        "No token provided or invalid format. Use: Authorization: Bearer <token>",
    });
  }

  // Extract token (remove 'Bearer ' prefix)
  const token = authHeader.substring(7);

  try {
    // Verify token
    const decoded = jwt.verify(token, JWT_SECERT);

    // Set userId from the decoded token (matching the signin payload)
    req.userId = decoded.id; // Note: using 'id' not 'userId'
    next();
  } catch (error) {
    return res.status(401).json({
      message: "Invalid or expired token",
    });
  }
}

module.exports = { auth, JWT_SECERT };
