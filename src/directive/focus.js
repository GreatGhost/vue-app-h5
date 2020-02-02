/* import Vue from 'vue'
 
Vue.directive('focus',{
inserted: function (el) {
    console.log('触发')
el.focus();
}
}) */

export default {
    inserted: function (el) {
        console.log('触发')
    el.focus();
    }
}