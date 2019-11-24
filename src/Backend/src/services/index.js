const task = require('./task/task.service.js');
const bucket = require('./bucket/bucket.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(task);
  app.configure(bucket);
};
