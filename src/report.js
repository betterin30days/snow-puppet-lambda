const format = require('./format');
const query = require('./query');

exports.run = async (browser) => {
  const mountains = [
    {
      name: 'Killington',
      url: 'https://www.onthesnow.com/vermont/killington-resort/skireport.html',
    },
    {
      name: 'Hunter',
      url: 'https://www.onthesnow.com/new-york/hunter-mountain/skireport.html',
    },
    {
      name: 'Camelback',
      url: 'https://www.onthesnow.com/pennsylvania/camelback-mountain-resort/skireport.html',
    },
  ];
  const snowReport = mountains.map(async (mountain) => {
    let result = await query.page(browser, mountain.url);
    return format.report(mountain.name, ...result);
  });
  return await Promise.all(snowReport);
};
