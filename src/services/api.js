const Amygdala = require('amygdala');

export default new Amygdala({
  config: {
    apiUrl: 'http://localhost:3000'
  },
  schema: {
    buckets: {
      url: '/buckets/',
      localStorage: true
    }
  }
});
