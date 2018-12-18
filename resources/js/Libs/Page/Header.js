const Breadcrumbs = require('./Breadcrumbs')

class Header {

    constructor() {
        this.className = 'PageHeader'
        this.title = ''
        this.breadcrumbs = new Breadcrumbs()
    }

    setTitle(title) {
        this.title = title
        return this
    }
}

module.exports = Header