/* import Vue from 'vue'
 
Vue.directive('title',{
inserted: function (el,binding) {
console.log(el);//el为指令所在元素
console.log("binding.name:" + binding.name);//binding.name是指令的名称不包含v-
console.log("binding.expression:" +binding.expression);
console.log("binding.value:" +binding.value);
el.innerHTML = binding.value;
}
}); */

export default {
    inserted(el,binding){
        el.innerHTML=binding.value;
    }
}