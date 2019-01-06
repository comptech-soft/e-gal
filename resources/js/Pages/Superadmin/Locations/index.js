/**
 * Locations
 */
const 
    Runer = require('comptechsoft-core-libs').Runer,
    ModernAdminApps = require('comptechsoft-admin-modern').Apps,
    store = new Vuex.Store(require('../../../App/Store/store')) 

Runer.Run($, window, {
    name: 'ComptechApp',
    apps: {
        'nav': ModernAdminApps.Nav(store),
        'sidebar': ModernAdminApps.Sidebar(store),
        'locations': require('./App/App')(store)
    },
    components: {
        'simple-page-filter': null,
        'simple-page-data': require('comptechsoft-admin-modern').Data,
        'location-form': require('./App/Components/Form'),
    }
})
