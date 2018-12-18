const PageManager = require('../../../../Libs/Page/Manager')

class Manager {

    constructor() {
        this.page_manager = new PageManager()
    }

    Init() {
        
        this.page_manager.header.setTitle('Roluri')

        this.page_manager.breadcrumbs.AddItem('home', 'aaaaa')
    }
}


module.exports = Manager