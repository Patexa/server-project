const { userRegister } = require("../routes/userRegister");

const loadRoutes = (app) => {
  app.use(userRegister);
};

module.exports = {
  loadRoutes,
};
