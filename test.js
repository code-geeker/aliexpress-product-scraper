const scrape = require('@code-geeker/aliscrape');
const product = scrape('32958933105');

product.then(res => {
  console.log('The JSON: ', res);
});
