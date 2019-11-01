import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {Demo} from "./directives/directives";
import {IsTrue} from "./filters/filter";

Vue.config.performance = true;
Vue.config.productionTip = false
/*Vue.directive('demo', {
    bind: function (el, {name, value, oldValue, expression, arg, modifiers}, vnode, oldVnode) {
        let s = JSON.stringify;
        el.innerHTML = `
        name:${s(name)}<br>
        value:${value}<br>
        expression:${expression}<br>
        argument:${arg}<br>
        modifiers:${modifiers}`;
    }
});*/
Vue.use(Demo);
Vue.use(IsTrue);
new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
