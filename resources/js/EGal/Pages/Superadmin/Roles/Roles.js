const PageManager = require('./../../../../Libs/Page/Manager')

class Roles {

    constructor() {

        this.page_manager = new PageManager()
    }

    initPage() {
        alert('Init Roles Page...');
    }
}


module.exports = Roles