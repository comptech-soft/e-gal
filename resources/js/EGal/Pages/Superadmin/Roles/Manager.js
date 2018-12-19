const PageManager = require('comptechsoft-core-libs').UI.ContentManager

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

        /**
         * HEADER. Actions
         */
        this.page_manager.header.actions.setTitle(null)
        this.page_manager.header.actions.setIcon('ft-more-horizontal')
        this.page_manager.header.actions.AddItem('1', {
            caption: 'Action #1',
            icon: 'la la-user',
            click: () => {
                alert('Action #1')
            }
        })
    }
}

module.exports = Manager