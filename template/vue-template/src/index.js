import './proxy.js'
import App from './App.vue';
const Vue = window.Vue;
Vue.config.productionTip = false;

const CloudUI = window.CloudUI;
installComponents(Vue, CloudUI);
console.log(Vue)
const app = new Vue({
  render: (h) => h(App),
});
app.$mount('#app')
console.log(app);

function installComponents(Vue, Components) {
    console.log(Components)
    const caseRE = /^[A-Z]/;
    const blackList = ['directives', 'filters', 'utils', 'mixins', 'blocks', 'vendors', 'install', 'default'];

    // 组件之间有依赖，有 install 的必须先安装
    Object.keys(Components).forEach((key) => {
        if (!caseRE.test(key)) { // 如果为大写则是组件
            if (!blackList.includes(key))
                console.error('不允许组件名首字母小写', key, Components[key]);
            return;
        }

        const Component = Components[key];
        if (Component.install) {
            Vue.component(key, Component);
            Component.install(Vue, key);
        }
    });
    Object.keys(Components).forEach((key) => {
        if (!caseRE.test(key)) { // 如果为大写则是组件
            if (!blackList.includes(key))
                console.error('不允许组件名首字母小写', key, Components[key]);
            return;
        }

        const Component = Components[key];
        Vue.component(key, Component);
        if (!Component.install) {
            Vue.component(key, Component);
        }
    });
}