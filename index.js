const path = require('path');
const { activateTheme } = require('./setup');

const startAdminer = async (args) => {
  const { default: phpServer } = await import('php-server');
  await activateTheme(args.theme);
  const server = await phpServer({
    base: path.resolve(__dirname, 'public'),
    ...args,
  });

  console.log(`PHP server running at ${server.url}`);
};

module.exports = startAdminer;