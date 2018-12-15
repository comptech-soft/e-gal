$(document).ready( () => {

    let url = document.head.querySelector('meta[name="base-url"]')
    if( ! url ) 
    {
        throw 'Please add the meta with base url.'
    }
    const AppLauncherClass = require('./../Libs/App/Launcher')

    const Axios = require('axios')
    Axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    Axios.defaults.headers.common['X-CSRF-TOKEN'] = document.head.querySelector('meta[name="csrf-token"]').content
    Axios.defaults.baseURL = document.head.querySelector('meta[name="base-url"]').content + '/'

    let launcher = new AppLauncherClass('ComptechApp', window, {

        '_': require('lodash'),
        'moment': require('moment'),
        'Vue': require('vue'),
        'VueRouter': require('vue-router').default,
        'Vuex': require('vuex'),
        'Axios': Axios,

        'FormManager': require('./../Libs/Form/Manager')
    
    })

    new window.ComptechApp.Vue({
        el: '#app',
        // router: new VueRouter({routes: require('./routes/routes')}),
        // store: new Vuex.Store(require('./store/store')),
        components: {
            'login-form': require('./Login'),
        }
    })
})