const VueManager = require('./../Vue/Manager')

class Launcher {

    constructor(name, window, plugins) {

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

        /**
         * App name global scope
         */
        this.window = window
        this.name = name
        this.window[name] = {
            vuemanager: new VueManager()
        }

        /**
         * Attach pugins
         */
        this.CreatePlugins(plugins, window[name])
    }

    CreateVueObject(key, vue) {
        this.window[this.name].vuemanager.CreateObject(key, vue)
    }

    CreatePlugins(plugins, app) {
        for(let key in plugins) {
            app[key] = plugins[key]
        }
    }
}

module.exports = Launcher