const PageManager = require('./../../../../Libs/Page/Manager')

class Users {

    constructor() {
        this.page_manager = new PageManager()
    }

    initPage() {
        alert('Init Users Page...');
    }
}


module.exports = Users