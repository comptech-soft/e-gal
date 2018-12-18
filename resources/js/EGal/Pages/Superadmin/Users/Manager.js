const PageManager = require('../../../../Libs/Page/Manager')

class Manager {

    constructor() {
        this.page_manager = new PageManager()
    }

    Init() {
        
        this.page_manager.header.setTitle('Utilizatori')
    }
}


module.exports = Manager