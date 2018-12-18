const Breadcrumbs = require('./Breadcrumbs')
const Actions = require('./Actions')

class Header {

    constructor() {
        this.className = 'page-header'
        this.title = ''
        this.breadcrumbs = new Breadcrumbs()
        this.actions = new Actions()
    }

    setTitle(title) {
        this.title = title
        return this
    }
}

module.exports = Header