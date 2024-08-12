window.WALLPAPER_GLOBAL = {
  calcNextFavIndex: null, // 根据当前全列表的 index 计算下一个壁纸 index （在喜欢列表中的壁纸，对应到全列表的index）
};

(async () => {
  // ------ 主要逻辑 ------
  WALLPAPER_GLOBAL.calcNextFavIndex = calcNextFavIndex;

  initSettings();
  
  
  
  await initWallpaper();
  
  return;

  async function initWallpaper() {
    const [
      currentWallpaperIndex,
      wallpaperList = null,
      wallpaperChangeFrequency = 'reopen',
      wallpaperChangeBy = 'random',
      wallpaperChangeable
    ] = await Promise.all([
      db.get('currentWallpaperIndex'),
      db.get('wallpaperList'),
      db.get('config.wallpaperChangeFrequency'),
      db.get('config.wallpaperChangeBy'),
      db.get('group.wallpaperChangeable'),
    ]);

    let wallpaperIndex = currentWallpaperIndex;
    let isFirstTimeUsingPlugin = wallpaperIndex === undefined;
    let shouldSwitchWallpaperWhenReopen = wallpaperChangeFrequency === 'reopen';
    let globalList = wallpaperList || config.wallpaperList;
    let favList = globalList.filter(wp => wp.like !== false);


    if (isFirstTimeUsingPlugin) {
      wallpaperIndex = 0;
      await db.set('currentWallpaperIndex', wallpaperIndex);
      await db.set('config.wallpaperUpdateAt', Date.now());
    } else if (wallpaperChangeable !== false) {
      if (shouldSwitchWallpaperWhenReopen) {
        if (favList.length > 1) {
          wallpaperIndex = calcNextFavIndex({
            globalList: globalList,
            isRandomMode: wallpaperChangeBy === 'random',
            currentIndex: currentWallpaperIndex
          });
          await db.set('currentWallpaperIndex', wallpaperIndex);
        }
        let date = Date.now();
        await db.set('config.wallpaperUpdateAt', date);
      }
    }

    const container = document.querySelector('#wallpaper-puppet');
    const puppeImg = new Image();
    puppeImg.setAttribute('class', 'w-full h-full object-cover');
    puppeImg.src = (wallpaperList || config.wallpaperList)[wallpaperIndex]?.url;
    puppeImg.onload = function () {
      console.log('%c图片加载时间', 'color: green; font-size: 32px;', performance.timing.navigationStart - Date.now());
      container.appendChild(puppeImg);

      const cover = document.getElementsByClassName('cover')[0];
      cover.className += ' cover-fadein ';

      window.requestAnimationFrame(step);
    };
  }

  // 喜欢的壁纸 index 转换成所在全局列表的 index
  function favIndex2GlobalIndex (favList, globalList, index) {
    return globalList.findIndex(wp => wp.id === favList[index].id);
  };

  // 根据当前喜欢壁纸的 index 生成一个新的全局 index
  function calcGlobalIndexByCurrentIndex(favList, globalList, index) {
    let favIndex = calcRandomFavIndex(index, favList.length);
    return favIndex2GlobalIndex(favList, globalList, favIndex);
  };

  // 全局index 转换成喜欢列表的id
  function globalIndex2FavIndex (favList, globalList, index) {
    let wallpaper = globalList[index];
    return favList.findIndex(wp => wp.id === wallpaper.id);
  };

  // 根据当前喜欢的index 生成一个新的喜欢的壁纸的index
  function calcRandomFavIndex (currentIndex, imagesCount) {
    let result;
    while (result === currentIndex || result === undefined) {
      result = Math.floor(Math.random() * imagesCount);
    }
    return result;
  };
  /**
   * 根据当前展示的壁纸 id ，获取下一个喜欢的壁纸
   * @param { 所有壁纸列表 } params.globalList wp[]
   * @param { 当前展示的壁纸 index } params.curIndex   number
   * @param { 切换壁纸模式 } params.isRandomMode
   * @returns { object } 壁纸对象
   */
  function calcNextFavIndex(params) {
    const globalList = params.globalList || [];
    const favList = globalList.filter(wp => wp.like !== false);
    const curIndex = params.currentIndex;
    const isRandomMode = params.isRandomMode;

    // 把当前展示的壁纸在全局列表中的 index -> 喜欢列表中对应的 id
    const currentFavIndex = globalIndex2FavIndex(favList, globalList, curIndex);

    // 没找到, 说明当前壁纸已经变成了不喜欢的壁纸了, 随便从喜欢列表中拿一张壁纸
    if (currentFavIndex === -1) return calcGlobalIndexByCurrentIndex(favList, globalList, -1);

    if (isRandomMode) {
      return calcGlobalIndexByCurrentIndex(favList, globalList, currentFavIndex);
    }

    const nextFavIndex = (currentFavIndex + 1) % favList.length;
    return favIndex2GlobalIndex(favList, globalList, nextFavIndex);
  };

  function step() {
    if (!window.INITED) {
      if (!document.hidden) {
        window.dispatchEvent(new Event('inited'));
      }
      window.requestAnimationFrame(step);
    }
  }
  /**
   * 下面是初始化 widgets 的逻辑
   */

  function htmlToNode (htmlString) {
    const div = document.createElement('div');
    div.innerHTML += htmlString;
    return div.firstChild;
  }

  function open (url) {
    if (!url) return;
    window.open(url, '_blank');
  };
  function initWidgets(list) {
    console.log("initWidgets");
  }

  async function initWeather() {

  }
})();

