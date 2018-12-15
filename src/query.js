exports.page = async (browser, url) => {
  const page = await browser.newPage();
  await page.goto(
    url,
    {waitUntil: ['domcontentloaded', 'networkidle0']}
  );
  let result = await page.evaluate(() => {
    const div = document.getElementById('resort_terrain');
    const elements = div.getElementsByClassName('open');
    const content = Array.prototype.map.call(elements, (element) => element.textContent);
    return content;
  });
  await page.close();
  return result;
};
