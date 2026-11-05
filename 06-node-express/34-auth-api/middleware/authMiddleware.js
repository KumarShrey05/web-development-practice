import jwt from "jsonwebtoken";

const protectRoute = (req, res, next) => {
  try {
    // Gets the authorization header from the request.
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        message: "Unauthorized - No token provided",
      });
    }

    // Extracts the JWT token from the Bearer header.
    const token = authHeader.slice(7).trim();

    if (!token) {
      return res.status(401).json({
        message: "Unauthorized - No token provided",
      });
    }

    // Verifies the token using the JWT secret.
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Checks whether the token contains a valid user ID.
    if (!Number.isInteger(decoded.id)) {
      return res.status(401).json({
        message: "Unauthorized - Invalid token",
      });
    }

    // Stores authenticated user data for the next middleware.
    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({
      message: "Unauthorized - Invalid or expired token",
    });
  }
};

// Exports the authentication middleware.
export { protectRoute };
