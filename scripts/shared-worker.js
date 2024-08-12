importScripts('/lib/localforage.js');

const LANG = (navigator.language !== 'zh-CN' ? 'en-US' : 'zh-CN').slice(0, 2);
const WEATHER_DOMAIN = '/';
const connetPool = [];
let loading = null;

let iconLoading = false;
const iconConnectPool = [];

let searcherLoading = false;
const searcherConnectPool = [];

let weatherLoading = false;
const weatherConnectPool = [];

onconnect = async function(e) {
  const port = e.ports[0];

  handleInitIcons(port, iconConnectPool, boardcast);

  handleInitSearcher(port, searcherConnectPool, boardcast);

  handleInitWeather(port, weatherConnectPool, boardcast);
};

function boardcast(pool, data) {
  while (pool.length > 0) {
    const _port = pool.pop();
    _port.postMessage(data);
  }
}


async function handleInitIcons(port, pool, boardcast) {
console.log("handleInitIcons");
}


async function handleInitSearcher(port, pool, boardcast) {
console.log("handleInitSearcher");
}


async function handleInitWeather(port, pool, boardcast) {
 console.log("handleInitWeather");
}
