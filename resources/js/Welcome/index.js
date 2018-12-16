const 
    AppLauncherClass = require('./../Libs/App/Launcher'),
    Axios = require('axios')

$(document).ready( () => {

    let url = document.head.querySelector('meta[name="base-url"]')
    if( ! url ) 
    {
        throw 'Please add the meta with base url.'
    }
    
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

        'vueInstances': {},

        // 'FormManager': require('./../Libs/Form/Manager')
    
    })

    window.ComptechApp.Vue.use(window.ComptechApp.Vuex)

    window.ComptechApp.vueInstances['nav'] = new window.ComptechApp.Vue({
        el: '#app-nav',
        // router: new VueRouter({routes: require('./routes/routes')}),
        store: new window.ComptechApp.Vuex.Store(require('./Store/store')),
        components: {
            'top-navigation': require('./Nav')
        },
        mounted(){
            this.$store.commit('getConfig')
        },
    })

})