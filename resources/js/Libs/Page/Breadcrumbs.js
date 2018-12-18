class Breadcrumbs {

    constructor() {
        this.className = 'page-header-breadcrumbs'
        this.list = {}
    }

    AddItem(key, item) {
        this.list[key] = item
        return this
    }
    
}

module.exports = Breadcrumbs