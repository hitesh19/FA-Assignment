// Initializes the `bucket` service on path `/bucket`
const { Bucket } = require('./bucket.class');
const createModel = require('../../models/bucket.model');
const hooks = require('./bucket.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/bucket', new Bucket(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('bucket');

  service.hooks(hooks);
};
