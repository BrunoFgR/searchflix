const authConfig = {
  jwt: {
    secret: process.env.JWT_SECRET || "secret",
    expiresIn: 60 * 60 * 24,
  },
};

export { authConfig };
