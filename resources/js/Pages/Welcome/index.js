const Launcher = require('comptechsoft-core-libs').Launcher

//  router: new VueRouter({routes: require('./routes/routes')}),   

$(document).ready( () => {

    let launcher = new Launcher('ComptechApp', window)
    let store = new Vuex.Store(require('./../../App/Vue/Store/store'))

    launcher
        .Init()
        .RegisterMixin(require('comptechsoft-core-libs').VUE.Mixins.Store)
        .RegisterApps({
            'app-nav': require('./../../App/Vue/Instances/Layout/Nav')(store, launcher.App()),
            'left-sidebar': require('./../../App/Vue/Instances/Layout/Sidebar')(store, launcher.App()),
        })
        

})