class Breadcrumbs {

    constructor() {
        this.className = 'PageBreadcrumbs'
        this.list = {}
    }

    AddItem(key, item) {
        this.list[key] = item
        return this
    }
    
}

module.exports = Breadcrumbs