Vue.component('simple-page-filter', require('./../Components/Body/Filter/Section'))
Vue.component('simple-page-data', require('./../Components/Body/Data/Section'))

const ContentManager = require('comptechsoft-core-libs').UI.ContentManager

let content = new ContentManager()

content
    .setHeaderTitle('Utilizatori')
    .setHeaderBreadcrumbs(require('./Header/Breadcrumbs'))
    .setHeaderActions(require('./Header/Actions'))
    .setBodyDataHeader({
        title: 'Utilizatorii platformei',
        toolbar: require('./Body/Toolbar'),
        actions: require('./Body/Actions'),
    })
    .setBodyDataPresentation(require('./Body/Presentation'))

module.exports = content