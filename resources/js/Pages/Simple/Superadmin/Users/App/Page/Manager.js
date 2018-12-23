/**
 * Componenta specifica pentru filtrare
 */
Vue.component('simple-page-filter', require('./Components/Filter'))

/**
 * Componenta standardizata pentru afisarea datelor
 */
Vue.component('simple-page-data', require('comptechsoft-admin-modern').pages.simple.DataComponent)

/**
 * Elementele definitorii paginii
 */
const ContentManager = require('comptechsoft-core-libs').UI.ContentManager
let content = new ContentManager()

content
    .setHeaderTitle('Utilizatori')
    .setHeaderBreadcrumbs(require('./Content/Header/Breadcrumbs'))
    .setHeaderActions(require('./Content/Header/Actions'))
    .setBodyDataHeader({
        title: 'Utilizatorii platformei',
        toolbar: require('./Content/Body/Toolbar'),
        actions: require('./Content/Body/Actions'),
    })
    .setBodyDataPresentation(require('./Content/Body/Presentation'))

module.exports = content