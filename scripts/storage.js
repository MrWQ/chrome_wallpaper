/* eslint-disable */
class Database {
  id = chrome.runtime.id;

  async get(key) {
    const value = await localforage.getItem(this.id + key);
    return JSON.parse(value) ?? undefined;
  }

  set(key, value) {
    localforage.setItem(this.id + key, JSON.stringify(value));
  }
}

const db = new Database();

const getBrowserLanguage = () => {
  const language = (chrome.i18n?.getUILanguage() ?? navigator.language) !== 'zh-CN'
    ? 'en-US'
    : 'zh-CN';
  return language;
};

async function initSettings() {
  window.settings = {};

  // init group settings
  const [
    hideable,
    search,
    clockVisible,
    weatherVisible,
    wallpaperChangeable,
    wallpaperOrderBy,
    groupLanguage,

    autoHideAfter,
    searchEngine,
    searchRight,
    searchOpenNewTab,
    clockFormat,
    weatherUnit,
    wallpaperChangeFrequency,
    wallpaperChangeBy,
    language,

    now,
    week,
    weatherUpdateAt,
  ] = await Promise.all([
    db.get('group.hideable'),
    db.get('group.search'),
    db.get('group.clockVisible'),
    db.get('group.weatherVisible'),
    db.get('group.wallpaperChangeable'),
    db.get('group.wallpaperOrderBy'),
    db.get('group.language'),

    db.get('config.autoHideAfter'),
    db.get('config.searchEngine'),
    db.get('config.searchRight'),
    db.get('config.searchOpenNewTab'),
    db.get('config.clockFormat'),
    db.get('config.weatherUnit'),
    db.get('config.wallpaperChangeFrequency'),
    db.get('config.wallpaperChangeBy'),
    db.get('config.language'),

    db.get('weather.now'),
    db.get('weather.week'),
    db.get('weather.updateAt'),
  ]);

  window.settings.group = {
    hideable: hideable ?? true,
    search: search ?? true,
    clockVisible: clockVisible ?? true,
    weatherVisible: weatherVisible ?? false,
    wallpaperChangeable: wallpaperChangeable ?? true,
    wallpaperOrderBy: wallpaperOrderBy ?? true,
    language: groupLanguage ?? true,
  };
  // init config settings
  window.settings.config = {
    autoHideAfter: autoHideAfter ?? 5 * 60 * 1000,
    searchEngine: searchEngine ?? (
      getBrowserLanguage() === 'zh-CN'
        ? window.SEARCH_ENGINE_LIST[1].url
        : window.SEARCH_ENGINE_LIST[0].url
    ),
    searchEngineList: SEARCH_ENGINE_LIST,
    searchOpenNewTab: searchOpenNewTab ?? true,
    searchRight: searchRight ?? false, // 用来设置 popup 的初始值
    searchRightRaw: searchRight, // 用于第一次展现搜索授权（当用户第一次点击input框）
    clockFormat: clockFormat ?? '24',
    weatherUnit: weatherUnit ?? 'c',
    wallpaperChangeFrequency: wallpaperChangeFrequency ?? 'reopen',
    wallpaperChangeBy: wallpaperChangeBy ?? 'random',
    language: language ?? 'zh-CN',
  };
  // init weather settings
  window.weather = {
  };

  // window.dispatchEvent(new Event('inited'));
}


