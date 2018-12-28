/**
 * Vue root application ...... : "Roles"
 */

const 

    /** Numele global al containerilui */
    name = 'ComptechApp',

    /** Store-ul comun */
    store = require('../../../App/Store/store'),

    /** Sidebarul comun */
    sidebar = {
        dispatcher: require('../../../App/Sidebar/Dispatcher')
    },

    /** Vue root apps */
    apps = {
        'roles': {
            creator: require('./App/Create'),
            component: require('comptechsoft-admin-modern').pages.simple.MainComponent,
        }
    },

    /** Vue Components */
    components = {
        'simple-page-filter': null,
        'simple-page-data': require('comptechsoft-admin-modern').pages.simple.DataComponent,
        'role-form': require('./App/Components/Form'),
    },

    /** Main Index launcher */
    Index = require('comptechsoft-admin-modern').pages.simple.Index

Index.Run($, window, {name, store, sidebar, apps, components})
