const VueManager = require('./../Vue/Manager')
const Http = require('./../Http/Http')
const Auth = require('./../Auth/Auth')
const Dom = require('./../DOM/Dom')

class Launcher {

    constructor(name, window) {

        this.name = name
        this.window = window

        /**
         * Lodash
         */
        this.window._ = require('lodash')

        /**
         * Moment
         */
        this.window.moment = require('moment')

        /**
         * Axios
         */
        this.window.axios = require('axios')
        this.window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
        this.window.axios.defaults.headers.common['X-CSRF-TOKEN'] = document.head.querySelector('meta[name="csrf-token"]').content
        this.window.axios.defaults.baseURL = document.head.querySelector('meta[name="base-url"]').content + '/'

        /**
         * Vue, Vuex, VueRouter
         */
        this.window.Vue = require('vue')
        this.window.VueRouter = require('vue-router').default
        this.window.Vuex = require('vuex')

        this.window.Vue.use(this.window.Vuex)


        /**
         * App name global scope
         */
        this.window[name] = {}
        this.window[name].vuemanager = new VueManager(this.window[name])

        /**
         * Attach pugins
         */
        this.CreatePlugins({
            'FormManager': require('./../Form/Manager'),
        }, this.window[name])
    }

    CreateVueObject(key, vue) {
        this.window[this.name].vuemanager.CreateObject(key, vue)
    }

    VueMixins(mixins) {
        _.each(mixins, mixin => {
            Vue.mixin(mixin)
        })
    }

    CreatePlugins(plugins, app) {

        app['Http'] = new Http(this.window[this.name])
        app['Auth'] = new Auth(this.window[this.name])
        app['DOM'] = new Dom(this.window[this.name])

        for(let key in plugins) {
            app[key] = plugins[key]
        }
    }

}

module.exports = Launcher