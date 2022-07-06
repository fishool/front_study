
let vueMain = new Vue({
    render: h => h(App),
    // 注册全局总线
    beforeCreate () {
        Vue.prototype.$bus = this;
    },
}).$mount('#app');

export { vueMain };
