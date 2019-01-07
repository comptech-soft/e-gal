/** 
 * Superadmin. Roles page 
 */

const 
    /** Boot the system */
    Boot = require('comptechsoft-admin-modern').Boot,
    
    /** Runer function */
    Run = Boot('ComptechApp', require('./../../../App/Store/store') ),
    
    /** Vue Apps */
    apps = {
        'roles': require('./App/App')
    },
    
    /** Vue components */
    components = {
        'simple-page-data': require('comptechsoft-admin-modern').Data,
        'simple-page-filter': null,
        'simple-page-form': require('./App/Components/Form'),
    }

/** Call the Runner function */
Run(apps, components)