//import './css/site.css';
//import 'bootstrap';
//import '../node_modules/vuetify/dist/vuetify.min.css';

import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';

Vue.use(VueRouter);
Vue.use(Vuetify);

const routes = [
    { path: '/', component: require('./components/home/home.vue.html') },
    { path: '/counter', component: require('./components/counter/counter.vue.html') },
    { path: '/fetchdata', component: require('./components/fetchdata/fetchdata.vue.html') }
];

new Vue({
    el: '#app-root',
    router: new VueRouter({ mode: 'history', routes: routes }),
    render: h => h(require('./components/app/app.vue.html'))
});
