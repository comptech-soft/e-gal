const 
    Launcher = require('./../../../Libs/App/Launcher')
    
$(document).ready( () => {

    let launcher = new Launcher('ComptechApp', window)

    launcher
        .Init()
        .RegisterApps({
            'login': require('./../../../EGal/Vue/Apps/Login')
        })

})