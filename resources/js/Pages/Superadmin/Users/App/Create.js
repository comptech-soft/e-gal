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
    .setFormComponent('user-form')
    .setBodyDataPresentation(require('./Page/DPresentation'))

let form_manager = 'I am the form manager....'

module.exports = CreateApp.Create({
    endpoint: 'superadmin/users/get-records',
    per_page: 20,
    content_manager,
    form_manager,
    searchable: require('./Page/DSearcheable')
})