class Launcher {

    constructor(name, window, plugins) {

        /**
         * App name global scope
         */
        this.name = name
        window[name] = {}

        /**
         * Attach pugins
         */
        this.CreatePlugins(plugins, window[name])
    }

    CreatePlugins(plugins, app) {
        for(let key in plugins) {
            app[key] = plugins[key]
        }

        /**
         * 
         */
    }
}

module.exports = Launcher