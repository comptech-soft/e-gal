/**
 * Elementele definitorii paginii
 */
const 
    ContentManager = require('comptechsoft-core-libs').UI.ContentManager,
    CreateApp = require('comptechsoft-admin-modern').pages.simple.CreateApp

let content_manager = new ContentManager()

content_manager
    .setHeaderTitle('Roluri')
    .setHeaderBreadcrumbs(require('./Page/HBreadcrumbs'))
    .setHeaderActions(require('./Page/HActions'))
    .setBodyDataHeader({
        title: 'Rourile utilizate în platformă',
        toolbar: require('./Page/DToolbar'),
        actions: require('./Page/DActions'),
    })
    .setBodyDataPresentation(require('./Page/DPresentation'))

module.exports = CreateApp.Create({
    endpoint: 'superadmin/roles/get-records',
    per_page: 20,
    content_manager,
    searchable: require('./Page/DSearcheable')
})

