const 
    Runer = require('comptechsoft-core-libs').Runer,
    ModernAdminApps = require('comptechsoft-admin-modern').Apps,
    store = new Vuex.Store(require('./../App/Store/store')),
    Run = (vue_apps, components) => {

        let apps = {
            'nav': ModernAdminApps.Nav(store),
            'sidebar': ModernAdminApps.Sidebar(store),            
        }
        _.each(vue_apps, (app, key) => {
            apps[key] = app(store)
        })

        Runer.Run($, window, {name: 'ComptechApp', apps, components})
    }

module.exports = Run