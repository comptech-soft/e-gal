class Header {

    constructor() {
        this.className = 'PageHeader'
        this.title = ''
    }

    setTitle(title) {
        this.title = title
        return this
    }
}

module.exports = Header