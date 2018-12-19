const PageManager = require('comptechsoft-core-libs').UI.ContentManager

class Manager {

    constructor() {
        this.page_manager = new PageManager()
    }

    Init() {
        
        this.page_manager.header.setTitle('Utilizatori')
    }
}


module.exports = Manager