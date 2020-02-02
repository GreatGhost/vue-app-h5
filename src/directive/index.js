// import './focus'
// import './scroll'
// import './title'

// index.js
import InfiniteScroll from './InfiniteScroll';
import InfiniteScrollDisabled from './InfiniteScrollDisabled';
import InfiniteScrollDistance from './InfiniteScrollDistance';
import focus from './focus'
import title from './title'
export default {
  install(Vue, options) {
    const directives = {
      focus:focus,
      title:title,
      InfiniteScroll,
      InfiniteScrollDisabled,
      InfiniteScrollDistance
    };
    Object.keys(directives).forEach(key => {
      directives[key].$options = options;
      Vue.directive(key, directives[key]);
    });
  },
};

