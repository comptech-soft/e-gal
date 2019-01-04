/**
 * Welcome
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
    }
})