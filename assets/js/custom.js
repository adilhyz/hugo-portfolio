/**
 * Activation Footag For Adilhyz Blog
 * @author @Adilhyz https://adilhyz.github.io
 */
document.addEventListener("DOMContentLoaded", function () {
  var path = window.location.pathname.replace(/\/+$/, ""); 
  if (path === "") path = "/"; // normalisasi root

  document.querySelectorAll("#footag a").forEach(function (a) {
    var href = a.getAttribute("href").replace(/\/+$/, "");
    if (href === "") href = "/";

    // exact match ATAU prefix match (untuk /tags/* dll)
    if (path === href || path.startsWith(href + "/")) {
      a.classList.add("active");
    }
  });
});


/**
 * Inspired by @lruihao
 * @returns {Blog}
 */
class Blog {
  constructor() {
    /**
     * current environment is local or not
     * @type {Boolean}
     */
    this.isLocal = window.location.href.startsWith('http://localhost') || window.location.href.startsWith('http://127.0.0.1');
  }

  /**
   * baidu auto push
   * @link https://ziyuan.baidu.com
   * @returns {Blog}
   */
  baiduPush() {
    let bp = document.createElement('script');
    let curProtocol = window.location.protocol.split(':')[0];
    if (curProtocol === 'https') {
      bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
    } else {
      bp.src = 'http://push.zhanzhang.baidu.com/push.js';
    }
    let s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(bp, s);
    return this;
  }
  /**
 * console blog information
 * @returns {Blog}
 */
  blogInfo() {
    console.log(
      '%c サンレイ | adilhyz.github.io %c mail: sandyadilhayyi@gmail.com %c\n\nYo!\nWelcome To My Journal。\n',
      'color: #FF0000; background: #99a9cc; padding:5px 0; border-radius: 5px 5px 5px 5px;',
      'background: #927887; padding:5px 0; border-radius: 5px 5px 5px 5px;',
      ''
    );
    return this;
  }

  /**
   * baidu auto push
   * @link https://ziyuan.baidu.com
   * @returns {Blog}
   */
  baiduPush() {
    let bp = document.createElement('script');
    let curProtocol = window.location.protocol.split(':')[0];
    if (curProtocol === 'https') {
      bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
    } else {
      bp.src = 'http://push.zhanzhang.baidu.com/push.js';
    }
    let s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(bp, s);
    return this;
  }

  /**
   * Rest in Peace. R.I.P 🕯️
   * @returns {Boolean} 是否有 R.I.P 事件
   */
  RIP() {
    /**
     * 昔人已乘白云去，兹地空余黄鹤楼。逝者安息 🕯️
     * @type {Array<Object>} R.I.P events
     */
    const RIP_EVENTS = [
      {
        date: '*-9-18',
        content: '-',
        duration: 3,
      },
    ];
    const now = new Date();
    const today = { 
      year: now.getFullYear(),
      month: now.getMonth() + 1,
      date: now.getDate(),
    };
    const todayEvents = RIP_EVENTS.filter(event => {
      const [ eventYear, eventMonth, eventDate] = event.date.split('-');
      // 计算出 event 的结束日期
      const eventEndDate = new Date(
        eventYear === '*' ? today.year : eventYear,
        (eventMonth === '*' ? today.month : eventMonth) - 1,
        eventDate === '*' ? today.date : eventDate
      );
      eventEndDate.setDate(eventEndDate.getDate() + event.duration);
      return (
        (eventYear === '*' || parseInt(eventYear) === today.year) &&
        (eventMonth === '*' || parseInt(eventMonth) === today.month) &&
        (eventDate === '*' || parseInt(eventDate) === today.date || (today.date >= parseInt(eventDate) && now <= eventEndDate))
      )
    });

    if (todayEvents.length) {
      document.querySelector('html').style.filter = 'grayscale(100%)';
      console.table(todayEvents);
    }
    return todayEvents.length;
  }

  /**
   * initialize
   * @returns {Blog}
   */
  init() {
    // if (!this.isLocal) {
    //   this.baiduPush();
    // }
    // custom settings
    if (!this.RIP()) {
      this.blogInfo();
    }
    return this;
  }
}

/**
 * immediate.
 */
(() => {
  const blog = new Blog();
  blog.init();
  // it will be executed when the DOM tree is built
  document.addEventListener('DOMContentLoaded', () => {
    //
  });
})();