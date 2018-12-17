class Manager {

    constructor() {
        
        this.instances = {}

    }

    CreateObject(key, vue) {
        this.instances[key] = new Vue(vue)
    }
}

module.exports = Manager