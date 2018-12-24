/**
 * Elementele definitorii paginii
 */
const 
    ContentManager = require('comptechsoft-core-libs').UI.ContentManager,
    CreateApp = require('comptechsoft-admin-modern').pages.simple.CreateApp

let content_manager = new ContentManager()

content_manager
    .setHeaderTitle('Utilizatori')
    .setHeaderBreadcrumbs(require('./Page/HBreadcrumbs'))
    .setHeaderActions(require('./Page/HActions'))
    .setBodyDataHeader({
        title: 'Utilizatorii platformei',
        toolbar: require('./Page/DToolbar'),
        actions: require('./Page/DActions'),
    })
    .setFilterComponent('simple-page-filter')
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
    .setBodyDataPresentation(require('./Page/DPresentation'))

let form_manager = 'I am the form manager....'

module.exports = CreateApp.Create({
    endpoint: 'superadmin/users/get-records',
    per_page: 20,
    content_manager,
    form_manager,
    searchable: require('./Page/DSearcheable')
})