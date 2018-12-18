const PageManager = require('../../../../Libs/Page/Manager')

class Manager {

    constructor(Vue) {
        this.Vue = Vue
        this.page_manager = new PageManager()
    }

    Init() {
        
        /**
         * HEADER
         */

        /**
         * HEADER.Title
         */
        this.page_manager.header.setTitle('Roluri')
        
        /**
         * HEADER. Breadcrumbs
         */
        this.page_manager.header.breadcrumbs.AddItem('home', {
            active: false,
            caption: 'Dashboard',
            click: (vue) => {
                vue.app.Http.redirect(vue.url)
            }
        })
        this.page_manager.header.breadcrumbs.AddItem('roles', {
            active: true,
            caption: 'Roluri',
            click: null
        })

    }
}

module.exports = Manager