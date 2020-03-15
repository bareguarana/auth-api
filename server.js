const debug = require('debug')('auth-api:server');
const {
  PORT
} = require('./config/settings');
const app = require('./app');

const exitWithError = (err) => {
  process.stderr.write(`${err}\n`);
  process.stderr.write('Process will quit...\n');
  process.exit(1);
};

(async () => {
  try {
    const server = await app();

    await new Promise((resolve, reject) => {
      server
        .listen(PORT)
        .on('listening', () => {
          resolve(debug('server listening on port %o', PORT));
        })
        .on('error', reject);
    });
  } catch (error) {
    exitWithError(error);
  }
})();
