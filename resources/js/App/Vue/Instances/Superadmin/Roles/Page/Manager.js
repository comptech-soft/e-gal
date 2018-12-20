/**
 * Definirea paginii (contentului) pentru Roles
 */
const PageManager = require('comptechsoft-core-libs').UI.ContentManager
const VueComponents = require('comptechsoft-core-libs').VUE.Helpers.Components

class Manager {

    constructor(Vue) {
        this.Vue = Vue
        this.page_manager = new PageManager()
    }

    /**
     * HEADER
     * ======
     */
    InitPageHeader() {

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

    InitPageBody() {
        /**
         * Sectiunea de filtrare
         */
        if( ! VueComponents.exists('roles-filter') )
        {
            Vue.component('roles-filter', require('./../Components/Body/Filter/Filter'))
        }
        this.page_manager.body.filter.setComponent('roles-filter')

        /**
         * Sectiunea de date
         */
        if( ! VueComponents.exists('roles-data') )
        {
            Vue.component('roles-data', require('./../Components/Body/Data/Data'))
        }
        this.page_manager.body.data.setComponent('roles-data')

        /**
         * Header title
         */
        this.page_manager.body.data.header.setTitle('Rolurile utilizatorilor platformei')
        
        /**
         * Header toolbar
         */
        this.page_manager.body.data.header.toolbar.addButton('insert', {
            color: 'btn-primary',
            icon: 'ft-plus white',
            caption: 'Adaugă',
            click: () => {
                alert('Insert....');
            }
        })
        this.page_manager.body.data.header.toolbar.addButton('refresh', {
            color: 'btn-danger',
            icon: 'ft-trash white',
            caption: 'Șterge tot...',
            click: () => {
                alert('Refresh....');
            }
        })

        /**
         * Header actions
         */
        this.page_manager.body.data.header.actions.setId('roles-actions')
        this.page_manager.body.data.header.actions.setColor('btn-primary')
        this.page_manager.body.data.header.actions.setIcon('ft-settings white')
        this.page_manager.body.data.header.actions.addAction('refresh', {
            icon: 'ft-refresh',
            caption: 'Reîncarcă',
            click: () => {
                alert('Refresh...')
            },
        })
        this.page_manager.body.data.header.actions.addAction('download', {
            icon: 'ft-download',
            caption: 'Exportă',
            click: () => {
                alert('Export...')
            },
        })
        this.page_manager.body.data.header.actions.addAction('upload', {
            icon: 'ft-upload',
            caption: 'Importă',
            click: () => {
                alert('Imprta...')
            },
        })

        /**
         * Presentation
         */
        this.page_manager.body.data.attachPresentation('roles-presentation', ['table', 'list'], 'table')
        this.page_manager.body.data.presentation.setEndpoint('superadmin/roles/get-records')
        
    }

    Init() {
        this.InitPageHeader()
        this.InitPageBody()
    }
}

module.exports = Manager