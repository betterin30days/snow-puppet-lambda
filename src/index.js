const setup = require('./starter-kit/setup');
const report = require('./report');

exports.handler = async (event, context, callback) => {
  // For keeping the browser launch
  context.callbackWaitsForEmptyEventLoop = false;
  const browser = await setup.getBrowser();
  try {
    const result = await report.run(browser);
    callback(null, result);
  } catch (e) {
    callback(e);
  }
};
