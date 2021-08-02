const blobs = [
  "M37.3,-14.3C42.6,4.1,37.1,23.7,20,38.8C2.9,54,-25.8,64.5,-40,54.4C-54.2,44.2,-53.9,13.4,-44.8,-10.2C-35.7,-33.8,-17.8,-50.3,-0.9,-50C16,-49.7,32.1,-32.7,37.3,-14.3Z",
  "M51.4,-66C64.9,-60.8,73.1,-43.6,70.2,-28.5C67.3,-13.3,53.3,-0.3,43.9,9.8C34.5,19.9,29.7,27.1,23.2,39.3C16.6,51.4,8.3,68.6,-2.2,71.5C-12.6,74.5,-25.2,63.3,-38,53.1C-50.9,43,-63.9,34,-65.8,22.7C-67.7,11.4,-58.5,-2.3,-53.5,-17.3C-48.5,-32.3,-47.8,-48.5,-39.6,-55.4C-31.4,-62.2,-15.7,-59.7,1.6,-61.9C18.9,-64.1,37.8,-71.1,51.4,-66Z",
  "M24.7,-43.4C36.5,-36,53.6,-38.4,63.8,-32.8C73.9,-27.2,77,-13.6,75.4,-0.9C73.8,11.8,67.5,23.5,58.9,31.7C50.2,40,39.3,44.6,29.1,52.2C19,59.9,9.5,70.5,-2.1,74.1C-13.6,77.8,-27.3,74.3,-33.1,64.2C-39,54,-37.1,37.2,-43.2,25.4C-49.3,13.5,-63.3,6.8,-71.7,-4.9C-80.1,-16.5,-82.9,-33,-76.2,-43.7C-69.5,-54.5,-53.4,-59.5,-39.1,-65.4C-24.8,-71.4,-12.4,-78.4,-3,-73.3C6.5,-68.1,12.9,-50.9,24.7,-43.4Z",
  "M35.7,-49.1C41.7,-37.6,38.7,-21.9,41.3,-7.3C43.8,7.3,51.9,21,48.9,30.4C46,39.8,32.2,45.1,18.5,49.3C4.9,53.5,-8.5,56.7,-21.9,54.3C-35.3,51.9,-48.7,43.9,-57.4,31.7C-66.2,19.5,-70.2,3.2,-66.1,-10.2C-62,-23.6,-49.8,-34.2,-37.4,-44.6C-25,-55,-12.5,-65.2,1.2,-66.6C14.9,-68,29.8,-60.6,35.7,-49.1Z",
  "M26.9,-34.8C37.3,-23.3,50,-17.2,56.5,-6.1C63,4.9,63.4,20.9,56.4,32.1C49.4,43.4,35,50,20,55.7C5,61.5,-10.5,66.6,-24.8,63.4C-39.1,60.3,-52.1,48.9,-62.6,34.4C-73.1,19.9,-81,2.1,-79.6,-15.4C-78.2,-33,-67.5,-50.3,-52.6,-61C-37.8,-71.7,-18.9,-75.8,-5.3,-69.4C8.2,-63,16.5,-46.2,26.9,-34.8Z",
  "M41.1,-74.7C49,-66.6,48.4,-47.1,55.7,-32.7C62.9,-18.4,78,-9.2,82.2,2.4C86.3,13.9,79.4,27.9,70.8,40C62.2,52,52,62.2,39.9,65.7C27.9,69.2,13.9,66,1.5,63.5C-11,61,-22,59.1,-29.6,53C-37.2,46.9,-41.4,36.6,-51.1,27.1C-60.9,17.6,-76.1,8.8,-78.6,-1.5C-81.2,-11.7,-71,-23.4,-61.4,-33.1C-51.7,-42.7,-42.5,-50.2,-32.3,-57.1C-22.2,-64,-11.1,-70.3,2.7,-75C16.6,-79.7,33.1,-82.9,41.1,-74.7Z",
  "M36.3,-68.8C43.3,-58.8,42.7,-41.5,44,-28.9C45.2,-16.2,48.4,-8.1,48.1,-0.2C47.8,7.7,43.9,15.4,39.9,23.4C35.9,31.3,31.7,39.4,25,41.9C18.3,44.4,9.1,41.2,-3,46.4C-15.2,51.6,-30.3,65.2,-39.1,63.9C-47.9,62.6,-50.3,46.5,-55.3,33.4C-60.3,20.3,-67.9,10.1,-72.7,-2.8C-77.6,-15.7,-79.6,-31.4,-73.3,-42.4C-67.1,-53.4,-52.6,-59.6,-39,-65.9C-25.4,-72.1,-12.7,-78.2,1,-79.9C14.6,-81.6,29.3,-78.8,36.3,-68.8Z",
  "M33.7,-35.3C48.2,-19.2,67.7,-9.6,71.8,4.1C76,17.9,64.8,35.7,50.2,51.9C35.7,68,17.9,82.4,-2.5,84.9C-22.8,87.4,-45.6,77.9,-57.2,61.7C-68.8,45.6,-69.3,22.8,-63.8,5.5C-58.4,-11.9,-47,-23.8,-35.4,-39.9C-23.8,-56,-11.9,-76.3,-1.2,-75.2C9.6,-74,19.2,-51.4,33.7,-35.3Z",
  "M47.6,-7.6C47.6,13.6,23.8,27.1,-1.9,27.1C-27.7,27.1,-55.4,13.6,-55.4,-7.6C-55.4,-28.7,-27.7,-57.4,-1.9,-57.4C23.8,-57.4,47.6,-28.7,47.6,-7.6Z",
  "M58.8,-17.9C64.8,-0.5,50.5,24.7,29.5,39.8C8.5,54.9,-19.3,59.9,-41.2,46.4C-63.1,33,-79.1,1,-71.2,-18.9C-63.3,-38.8,-31.7,-46.6,-2.6,-45.8C26.4,-44.9,52.8,-35.3,58.8,-17.9Z"
];
function G(event) {
  if (event?.target && event.target.dataset.ignore) return;
	const w = S.getAttribute('width')-0;
  const h = S.getAttribute('height')-0;
  const t = A.elements.t.value;
  const n = Math.ceil(w / A.elements.n.valueAsNumber);
  const o = A.elements['o'].value;
  let d = '', s = '';

  for (let i = 0; i < n; i++) {
    const a = `class="${i % 3 ? 'lr' : 'tb'}" fill="hsl(var(--h),var(--s),${R(8,3)}0%)" opacity="0.${o}${R(10)}" style="--dist:${R(200, 75)}px;--time:${R(25000,10000)}ms;"`
    s+= t === 'e' ?
    `<ellipse ${a} cx="${R(w + 50) - 50}" cy="${R(h + 50) - 50}" rx="${R(150) + 25}" ry="${R(150) + 25}"/>` :
    t === 'p' ?
    `<polygon ${a} id="p${i}" points="${P(R(25,3), R(15))}" transform="scale(${R(3,0,false)})"/>` :
    t === 'b' ?
    `<path ${a} id="b${i}"  d="${blobs[R(10)]}" transform="rotate(${R(360)}) scale(${R(3,-10,false)})"/>` : 
    `<rect ${a} width="${R(200) + 20}" height="${R(200) + 20}" x="${R(w + 50) - 50}" y="${R(h + 50) - 50}" ry="${R(20)}"/>`
    if (t === 'b') d+= `<use x="${R(w + 50) - 50}" y="${R(h + 50) - 50}" xlink:href="#b${i}" viewBox="0 0 200 200"/>`;
    if (t === 'p') d+= `<use x="${R(w + 50) - 50}" y="${R(h + 50) - 50}" xlink:href="#p${i}"/>`;
  }
  S.innerHTML = d ? `<defs>${s}</defs>${d}` : s;
}

const O = new ResizeObserver(entries => {
  S.setAttribute('height', document.documentElement.clientHeight);
  S.setAttribute('width', document.body.offsetWidth);
  G();
});

function P(o, t) {
  const a = [], p = Math.PI / o, r = 100 / 2, v = (1 - t / 100) * r * Math.cos(p);
  let c = -.5 * Math.PI, x, y;
  for (let i = 0; i < o; i++) {
    x = (r * Math.cos(c)) + r;
    y = (r * Math.sin(c) + r);
    a.push([x.toFixed(2), y.toFixed(2)]);
    c += p;
    x = (v * Math.cos(c)) + r;
    y = (v * Math.sin(c)) + r;
    a.push([x.toFixed(2), y.toFixed(2)]);
    c += p;
  }
  return `${a.map(p => { const [x,y] = p; return `${x},${y}`}).join(' ')}`.replaceAll('.00','');
}

function R(max, min = 0, f = true) {
  return f ? Math.floor(Math.random() * (max - min) + min) : Math.random() * max;
};



function saveSVG(svg, ext = 'png') {
  const D = (href, name) => {
    const L = document.createElement('a');
    L.download = name;
    L.style.opacity = "0";
    document.body.append(L);
    L.href = href;
    L.click();
    L.remove()
  }
  const P = (p) => getComputedStyle(document.body).getPropertyValue(p).trim();

  const h = P('--h');
  const s = P('--s');
  const {width, height} = svg.getBBox(); 
  let clone = svg.outerHTML.replaceAll('var(--h)', h).replaceAll('var(--s)', s);
  const blob = new Blob([clone],{type:'image/svg+xml;charset=utf-8'});
  const format = { png: '', jpg: 'image/jpg', webp: 'image/webp' };
  const img = new Image();

  img.onload = () => {
    const C = document.createElement('canvas');
    C.width = width;
    C.height = height;
    const X = C.getContext('2d');
    X.fillStyle = `hsl(${h}, ${s}, 20%)`;
    X.fillRect(0, 0, width, height);
    X.drawImage(img, 0, 0, width, height);
    D(C.toDataURL(format[ext]), `image.${ext}`)
  };
  img.src = URL.createObjectURL(blob);
}

  /* getCachedItem */
  async function getCachedItem(url, store = 'store-v1', cachetime = 86400000) {
    const valid = (response) => {
      if (!response) return false;
      const timestamp = response.headers.get('timestamp')-0 + cachetime;
      return (timestamp > Date.now())
    }
    const cache = await caches.open(store);
    return cache.match(url).then(response => {
      if (valid(response)) return response;
      return fetch(url).then(response => {
        const clone = response.clone();
        const headers = new Headers(clone.headers);
        headers.append('timestamp', Date.now());
        cache.put(url, new Response(clone.body, {
          status: clone.status,
          statusText: clone.statusText,
          headers
        }));
        return response
      })
    })
  }

	async function blog(id) {
		getCachedItem(`https://dev.to/api/articles${id ? `/${id}` : '?username=madsstoumann'}`)
    .then(response => response.json())
    .then(json => {
      console.log(json)
      if (Array.isArray(json)) {
        bloginner.innerHTML = json.map(entry => `<a href="#blog" data-id="${entry.id}">${entry.cover_image ? `<img src="${entry.cover_image}">`:''}${entry.title}</a><br />`).join('');
      }
      else {
        blogheader.innerText = json.title;
        bloginner.innerHTML = json.body_html;
      }
    })
	}

  window.addEventListener('hashchange', () => {

    if (location.hash.startsWith('#blog')) {
      console.log(location)
      const params = new URLSearchParams(location.href);
    if (params) { 
      for(var value of params.values()) {
        if (value) {
          // blog(value)

        }
        else {
          blog();
        };
      }
    }
    }
  });
	// blog();
  // blog('653154');
  // blog('612806');

	
A.addEventListener('input', G);
O.observe(document.body);
h.addEventListener('input', () => document.body.style.setProperty('--h', h.valueAsNumber));
da.addEventListener('click', () => document.body.style.setProperty('--animn', da.checked ? 'none':'unset'));
s.addEventListener('input', () => document.body.style.setProperty('--s', s.valueAsNumber+'%'));
sp.addEventListener('input', () => document.body.style.setProperty('--speed', sp.valueAsNumber));
sv.addEventListener('click', () => saveSVG(S,A.elements.f.value));