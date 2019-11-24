const assert = require('assert');
const app = require('../../src/app');

describe('\'Task\' service', () => {
  it('registered the service', () => {
    const service = app.service('task');

    assert.ok(service, 'Registered the service');
  });
});
