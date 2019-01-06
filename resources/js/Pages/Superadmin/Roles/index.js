/**
 * Roles
 */
const 
    Run = require('./../../../Helpers/Run'),
    apps = {
        'roles': require('./App/App')
    },
    components = {
        'simple-page-data': require('comptechsoft-admin-modern').Data,
        'simple-page-filter': null,
        'simple-page-form': require('./App/Components/Form'),
    }

Run(apps, components)