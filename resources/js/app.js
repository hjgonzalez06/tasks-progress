require('./bootstrap');

window.Vue = require('vue');

/* import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
 
library.add(fas);
 
Vue.component('font-awesome-icon', FontAwesomeIcon); */

Vue.component('dashboards', require('./components/DashboardComponent.vue').default);

const app = new Vue({
    el: '#app',
});
