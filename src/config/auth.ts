const authConfig = {
  jwt: {
    secret: process.env.JWT_SECRET || "secret",
    expiresIn: parseInt(process.env.JWT_EXPIRATION!) || 60 * 60 * 24,
  },
};

export { authConfig };
