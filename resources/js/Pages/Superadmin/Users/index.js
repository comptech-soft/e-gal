const Launcher = require('comptechsoft-core-libs').Launcher

$(document).ready( () => {

    let launcher = new Launcher('ComptechApp', window)
    let store = new Vuex.Store(require('./../../../EGal/Store/store'))

    launcher
        .Init()
        .RegisterMixin(require('./../../../EGal/Vue/Mixins/Store'))
        .RegisterApps({
            'app-nav': require('./../../../EGal/Vue/Apps/Nav')(store, launcher.App()),
            'left-sidebar': require('./../../../EGal/Vue/Apps/Sidebar')(store, launcher.App()),
            'users': require('./../../../EGal/Vue/Apps/Users')(store, launcher.App(), require('./Users')),
        })
        

})