window.SEARCH_ENGINE_LIST = [
  // {
  //   'id': 'google',
  //   'title': { 'en-US': 'Google', 'zh-CN': '谷歌', 'zh-TW': '谷歌' },
  //   'url': 'https://www.google.com.hk/search?q={{keyword}}'
  // },
  {
    'id': 'bing',
    'title': { 'en': 'Bing', 'zh-CN': '必应', 'zh-TW': '必應' },
    'url': 'https://bing.com/?q={{keyword}}'
  },
  // {
  //   'id': 'yahoo',
  //   'title': { 'en-US': 'Yahoo', 'zh-CN': '雅虎', 'zh-TW': '雅虎' },
  //   'url': 'https://search.yahoo.com/search?p={{keyword}}'
  // },
  {
    'id': 'baidu',
    'title': { 'en': 'Baidu', 'zh-CN': '百度', 'zh-TW': '百度' },
    'url': 'https://cn.bing.com/?mkt=zh-CN&q={{keyword}}'
  }
];

window.EVENT_BUS = (function () {
  const events = Object.create(null);

  function on(name, handler) {
    if (!events[name]) events[name] = [];

    events[name].push(handler);
  }

  function off(name, handler) {
    if (events[name]) {
      const index = events[name].indexOf(handler);
      if (index !== -1) {
        events[name].splice(index, 1);
      }
    }
  }

  function emit(name, ...args) {
    if (events[name]) {
      events[name].forEach(handler => {
        handler(...args);
      });
    }
  }

  function clear(name) {
    if (!events[name]) events[name] = [];
    events[name] = [];
  }

  return { on, off, emit, clear };
})();


// 用于标签之间通信
window.BC = (function (event_bus) {
  function F () {
    this.events = Object.create({});
    this.tasks = Object.create({});
    this.entity = new BroadcastChannel(chrome.runtime.id);
    this.entity.onmessage = this.onmessage.bind(this);
  }

  F.prototype = {
    constructor: F,
    runTasks: function() {
      for (let i in this.tasks) {
        if (this.tasks.hasOwnProperty(i)) {
          try {
            let raw = JSON.parse(this.tasks[i]);
            let eventName = raw['event-name'];
            let eventParams = raw.value;
            this.emit(eventName, eventParams);
          } catch (e) {
          } finally {
            delete this.tasks[i];
          }
        }
      }
    },
    postMessage: function(eventName, value) {
      // console.log('告诉其他的 tab 执行任务', eventName, value);
      this.entity.postMessage(JSON.stringify({
        'event-name': eventName,
        value: value
      }));
    },
    onmessage: function(e) {
      let data = JSON.parse(e.data);
      let eventName = data['event-name'];
      let value = data.value;

      // NOTE 有时因为交互的问题, 会出现当前tab会接收到其他tab的更新命令
      // 所以判断下， 如果当前tab是展现状态，就不接受消息。
      // console.log('其他页面告诉我要更新内容', eventName, value);
      if (!document.hidden) return;

      this.tasks[eventName] = JSON.stringify({
        'event-name': eventName,
        value: value
      });
    },
    on: function (name, handler) {
      if (!this.events[name]) this.events[name] = [];
      this.events[name].push(handler);
    },
    emit: function () {
      let name = Array.prototype.shift.call(arguments);
      if (this.events[name]) {
        this.events[name].forEach(handler => {
          if (typeof handler === 'function') {
            handler.apply(null, arguments);
          } else {
            // console.log(handler, 'is not a function');
          }
        });
      }
    },
  };

  return new F();
})(EVENT_BUS);
