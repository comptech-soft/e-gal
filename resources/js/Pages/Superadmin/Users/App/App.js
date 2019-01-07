const 
    /** Simple page App Creator */
    SimplePageApp = require('comptechsoft-admin-modern').SimplePage.App,

    /** Roles Page Layout definition */
    layout = require('./Layout/~CreatePageLayout'),
    
    /** Roles Data Manager definition */
    manager = require('./DataManager/~CreateDataManager') 

/** Exporting the Roles Vue App Creator*/
module.exports = (store) => SimplePageApp(store, layout, manager)