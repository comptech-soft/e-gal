const 
    
    /** User Interface - Content Manager Class */
    ContentManager = require('comptechsoft-core-libs').UI.ContentManager,
    
    /** Simple Page Vue Root App Creator */
    CreateApp = require('comptechsoft-admin-modern').pages.simple.CreateApp

/** Content Manager Instance */
let content_manager = new ContentManager()

content_manager

    /** Simple Page Header. Title */
    .setHeaderTitle('Utilizatori')

    /** Simple Page Header. Breadcrumbs */
    .setHeaderBreadcrumbs(require('./Page/HBreadcrumbs'))

    /** Simple Page Header. Toolbar actions */
    .setHeaderActions(require('./Page/HActions'))

    /** Simple Page Body: title, toolbar, dropdown actions */
    .setBodyDataHeader({
        title: 'Utilizatorii platformei',
        toolbar: require('./Page/DToolbar'),
        actions: require('./Page/DActions'),
    })

    /** Simple Page Body: filter section component */
    .setFilterComponent('simple-page-filter')
    
    /** Simple Page Body: form section component */
    .setForm({
        component: 'user-form',
        actions: {
            insert: {
                endpoint: 'superadmin/users/insert',
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
                endpoint: 'superadmin/users/update',
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
                endpoint: 'superadmin/users/delete',
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
    endpoint: 'superadmin/users/get-records',
    per_page: 20,
    content_manager,
    searchable: require('./Page/DSearcheable'),
    conditions: {
        role_id: {
            where: 'role_users.role_id=[value]',
            value: null,
        }
    }
})