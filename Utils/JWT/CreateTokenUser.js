const createTokenUser = (user) => {
  return {
    name: user.Name,
    userId: user._id,
    role: user.Role,
    email: user.Email,
  };
};

module.exports = createTokenUser;
