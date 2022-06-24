require('./bootstrap');

import { createApp } from 'vue';

import App from './vue/app';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faPlusSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

library.add(faPlusSquare, faTrash);

const app = createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app');
