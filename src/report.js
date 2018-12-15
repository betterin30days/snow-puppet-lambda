const format = require('./format');
const query = require('./query');

exports.run = async (browser) => {
  const urls = [
    'https://www.onthesnow.com/vermont/killington-resort/skireport.html',
    'https://www.onthesnow.com/new-york/hunter-mountain/skireport.html',
    'https://www.onthesnow.com/pennsylvania/camelback-mountain-resort/skireport.html',
  ];
  const snowReport = urls.map(async (url) => {
    let result = await query.page(browser, url);
    return format.report(...result);
  });
  return await Promise.all(snowReport);
};
