const 
    
    /** User Interface - Content Manager Class */
    ContentManager = require('comptechsoft-core-libs').UI.ContentManager,
    
    /** Simple Page Vue Root App Creator */
    CreateApp = require('comptechsoft-admin-modern').pages.simple.CreateApp

/** Content Manager Instance */
let content_manager = new ContentManager()

content_manager



    /** Simple Page Body: title, toolbar, dropdown actions */
    .setBodyDataHeader({
        title: 'Rourile utilizate în platformă',
        toolbar: require('./Page/DToolbar'),
        actions: require('./Page/DActions'),
    })

    /** Simple Page Body: filter section component */
    .setFilterComponent(null)

    /** Simple Page Body: form section component */
    .setForm({
        component: 'role-form',
        actions: {
            insert: {
                endpoint: 'superadmin/roles/insert',
                header: {
                    title: 'Adăugare',
                    icon: 'la la-plus'
                },
                button: {
                    caption: 'Salvează',
                    icon: 'la la-save',
                    color: 'btn-primary',
                }

            },
            update: {
                endpoint: 'superadmin/roles/update',
                header: {
                    title: 'Modificare',
                    icon: 'la la-pencil'
                },
                button: {
                    caption: 'Salvează',
                    icon: 'la la-save',
                    color: 'btn-primary',
                }
            },
            delete: {
                endpoint: 'superadmin/roles/delete',
                header: {
                    title: 'Ștergere',
                    icon: 'la la-trash',
                },
                button: {
                    caption: 'Șterge',
                    icon: 'la la-trash',
                    color: 'btn-danger',
                }
            },
        }
    })

    /** Simple Page Body: data grid (table) or list */
    .setBodyDataPresentation(require('./Page/DPresentation'))

/** Export the created Vue root app */
module.exports = CreateApp.Create({
    endpoint: 'superadmin/roles/get-records',
    per_page: 20,
    content_manager,
    searchable: require('./Page/DSearcheable')
})

