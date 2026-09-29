const pages = [
  ['wheat-flour','https://unsplash.com/photos/white-powder-on-brown-wooden-table-8CYL4WGzSQ4'],
  ['red-chilli','https://unsplash.com/photos/red-chili-on-clear-glass-bowl-ul3G99O5oIA'],
  ['turmeric','https://unsplash.com/photos/closeup-of-tumeric-powder-spice-on-a-spoon-asfI99UALkw'],
  ['coriander','https://unsplash.com/photos/green-plant-in-close-up-photography-N73L0EzbJ8Y'],
  ['chickpeas','https://unsplash.com/photos/yellow-corn-on-glass-bowl-h83Rm3njjcg'],
  ['chana-flour','https://unsplash.com/photos/stainless-steel-cup-with-brown-powder-xw8pttN8MBg'],
  ['moong-dal','https://unsplash.com/photos/a-close-up-of-a-bunch-of-yellow-beans-Kagd7BPQDYc'],
  ['peanuts','https://unsplash.com/photos/photography-of-brown-nuts-ZPfd3ZobOc0'],
  ['castor','https://unsplash.com/photos/a-close-up-of-a-bunch-of-seeds-7OCx6fvc-K0'],
];

async function getImg(name, url) {
  try {
    const res = await fetch(url, {headers:{'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}});
    const html = await res.text();
    const m = html.match(/https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9_-]+/);
    console.log(name + ' => ' + (m ? m[0] : 'NOT_FOUND status=' + res.status));
  } catch(e) { console.log(name + ' => ERROR:'+e.message); }
}

(async()=>{ for(const [n,u] of pages) await getImg(n,u); })();
