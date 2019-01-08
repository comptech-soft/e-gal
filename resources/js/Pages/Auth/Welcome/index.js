/** 
 * Welcome page 
 */

const 
    /** Boot the system */
    Boot = require('comptechsoft-admin-modern').Boot,
    
    /** Runer function */
    Run = Boot('ComptechApp', require('./../../../App/Store/store') ),
    
    /** Vue Apps */
    apps = {},
    
    /** Vue components */
    components = {}

/** Call the Runner function */
Run(apps, components)