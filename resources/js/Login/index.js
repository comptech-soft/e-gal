const AppLauncherClass = require('./../Libs/App/Launcher')

let launcher = new AppLauncherClass('ComptechApp', window, {

    '_': require('lodash'),
    'moment': require('moment'),
    'Vue': require('vue'),
    'VueRouter': require('vue-router').default,
    'Vuex': require('vuex'),
    'Axios': require('axios'),

})

new window.ComptechApp.Vue({
    el: '#app',
    // router: new VueRouter({routes: require('./routes/routes')}),
    // store: new Vuex.Store(require('./store/store')),
    components: {
        'login-form': { template: '<div>I am the login form Vue component ;) ....</div>' }
    }
})