class Actions {

    constructor() {
        this.className = 'page-header-actions'
        this.title = null
        this.icon = null
        this.list = {}
    }

    setTitle(title) {
        this.title = title
        return this
    }

    setIcon(icon) {
        this.icon = icon
        return this
    }

    AddItem(key, item) {
        this.list[key] = item
        return this
    }

}

module.exports = Actions