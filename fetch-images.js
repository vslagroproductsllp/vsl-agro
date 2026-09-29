const fetch = require('node-fetch');

async function getImages(query) {
  const res = await fetch(`https://unsplash.com/napi/search/photos?query=${query}&per_page=5`);
  const data = await res.json();
  console.log(`--- ${query} ---`);
  data.results.forEach(r => console.log(r.urls.regular));
}

async function run() {
  await getImages('wheat grain');
  await getImages('flour');
  await getImages('chilli powder');
  await getImages('turmeric powder');
  await getImages('cumin seeds');
  await getImages('lentils');
  await getImages('chickpeas');
  await getImages('peanuts');
  await getImages('mustard seeds');
}

run();
