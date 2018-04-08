const user = require('./user');

module.exports = function(app, express) {
  let apiRouter = express.Router();
  apiRouter.use('/user', user);

  return apiRouter;
};

