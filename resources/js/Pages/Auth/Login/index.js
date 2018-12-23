const Launcher = require('comptechsoft-core-libs').Launcher
    
$(document).ready( () => {

    let launcher = new Launcher('ComptechApp', window)

    launcher
        .Init()
        .RegisterMixin(require('comptechsoft-core-libs').VUE.Mixins.Store)
        .RegisterApps({
            'login': require('./App/Create')
        })
        
})