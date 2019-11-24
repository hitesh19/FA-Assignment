const assert = require('assert');
const app = require('../../src/app');

describe('\'bucket\' service', () => {
  it('registered the service', () => {
    const service = app.service('bucket');

    assert.ok(service, 'Registered the service');
  });
});
