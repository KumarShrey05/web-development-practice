import jwt from "jsonwebtoken";

const protectRoute = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        message: "Unauthorized - No token provided",
      });
    }

    const token = authHeader.slice(7).trim();

    if (!token) {
      return res.status(401).json({
        message: "Unauthorized - No token provided",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!Number.isInteger(decoded.id)) {
      return res.status(401).json({
        message: "Unauthorized - Invalid token",
      });
    }

    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({
      message: "Unauthorized - Invalid or expired token",
    });
  }
};

export { protectRoute };
