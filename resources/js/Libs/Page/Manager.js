const Header = require('./Header')
const Breadcrumbs = require('./Breadcrumbs')

class Manager {

    constructor() {
        this.className = 'PageManager'
        this.header = new Header()
        this.breadcrumbs = new Breadcrumbs()
    }
}


module.exports = Manager