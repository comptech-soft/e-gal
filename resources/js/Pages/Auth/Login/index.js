const Launcher = require('comptechsoft-core-libs').Launcher
    
$(document).ready( () => {

    let launcher = new Launcher('ComptechApp', window)

    launcher
        .Init()
        .RegisterMixin(require('./../../../EGal/Vue/Mixins/Store'))
        .RegisterApps({
            'login': require('./../../../EGal/Vue/Apps/Login')
        })
        
})