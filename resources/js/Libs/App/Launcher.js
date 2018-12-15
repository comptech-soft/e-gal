class Launcher {

    constructor(name, window, plugins) {
        console.log('I am the App Launcher: (' + name + ')');

        this.name = name

        window[name] = {}

        this.CreatePlugins(plugins, window[name])
    }

    CreatePlugins(plugins, app) {
        for(let key in plugins) {
            app[key] = plugins[key]
        }
    }
}

module.exports = Launcher