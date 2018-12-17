class Manager {

    constructor(app) {
        
        this.app = app
        this.instances = {}

    }

    CreateObject(key, vue) {
        this.instances[key] = new Vue(vue)
    }
}

module.exports = Manager