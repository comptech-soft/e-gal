/**
 * Vue root application ...... : "Users"
 */
const 

    /** Numele global al containerilui */
    name = 'ComptechApp',

    /** Store-ul comun */
    store = require('../../../App/Store/store'),

    /** Sidebarul comun */
    sidebar = null,

    /** Vue root apps */
    apps = {
        'roles': {
            creator: require('./App/Create'),
            component: require('comptechsoft-admin-modern').pages.simple.MainComponent
        }
    },

    /** Vue Components */
    components = {
        'simple-page-filter': require('./App/Components/Filter'),
        'simple-page-data': require('comptechsoft-admin-modern').pages.simple.DataComponent,
        'user-form': require('./App/Components/Form'),
    },

    /**
     * Main Index
     */
    Index = require('comptechsoft-admin-modern').pages.simple.Index

Index.Run($, window, {name, store, sidebar, apps, components})