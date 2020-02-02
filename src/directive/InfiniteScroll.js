// directives/InfiniteScroll.js
export default {
    bind(el, binding) {
        console.log('测试滚动')
      let target = el;
      if (el.getAttribute('data-scrollTarget')) {
        target = el.querySelector(el.getAttribute('data-scrollTarget'));
      }
      target.addEventListener('scroll', e => {
        const busy = el.getAttribute('data-infiniteScrollDisabled') ? false : true;
        const distance = el.getAttribute('data-infiniteScrollDistance')
          ? Number.parseInt(el.getAttribute('data-infiniteScrollDistance'), 10)
          : 100;
        if (!busy && e.target.scrollHeight - (e.target.scrollTop + e.target.clientHeight) < distance) {
          el.setAttribute('data-infiniteScrollDisabled', true);
          binding.value(e);
        }
      });
    },
  };