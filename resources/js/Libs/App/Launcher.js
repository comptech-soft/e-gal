/**
 * Lodash
 */
window._ = require('lodash')

/**
 * Moment
 */
window.moment = require('moment')

/**
 * Axios
 */
window.axios = require('axios')
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
window.axios.defaults.headers.common['X-CSRF-TOKEN'] = document.head.querySelector('meta[name="csrf-token"]').content
window.axios.defaults.baseURL = document.head.querySelector('meta[name="base-url"]').content + '/'

/**
 * Vue, Vuex, VueRouter
 */
window.Vue = require('vue')
window.VueRouter = require('vue-router').default
window.Vuex = require('vuex')

window.Vue.use(window.Vuex)
window.Vue.use(window.VueRouter)

class Launcher {

    constructor(name, window) {
        this.name = name
        this.window = window
    }

    /**
     * Returneaza obiectul global al aplicatiei.
     * Exemplu: ComptechApp
     */
    App() {
        return this.window[this.name]
    }

    /**
     * Initializeaza: clase generale, vue mixins, ...
     */
    Init() {
        let 
            VueManager = require('./../Vue/Manager'),
            Http = require('./../Http/Http'),
            Auth = require('./../Auth/Auth'),
            Dom = require('./../DOM/Dom'),
            FormManager = require('./../Form/Manager')

        
        /**
         * Clases
         */
        this.window[this.name] = {}
        this.window[this.name]['Auth'] = new Auth(this.window[this.name])
        this.window[this.name]['DOM'] = new Dom(this.window[this.name])
        this.window[this.name]['FormManager'] = FormManager
        this.window[this.name]['Http'] = new Http(this.window[this.name])
        this.window[this.name]['VueManager'] = new VueManager(this.window[this.name])

        /**
         * Vue global mixins
         */
        Vue.mixin(require('./Mixins/Store')(this.window[this.name]))

        return this
    }

    RegisterApp(key, app) {
        this.window[this.name]['VueManager'].CreateObject(key, app)
        return this
    }

    RegisterApps(apps) {
        _.each(apps, (app, key) => {
            this.RegisterApp(key, app)
        })
        return this
    }

}

module.exports = Launcher