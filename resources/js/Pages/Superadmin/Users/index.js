/**
 * Crearea si executia aplicatiei "Users"
 */
const 
    /**
     * Numele global
     */
    name = 'ComptechApp',

    /**
     * Store-ul comun
     */
    store = require('../../../App/Store/store'),

    /**
     * Sidebarul comun
     */
    sidebar = {
        dispatcher: require('../../../App/Sidebar/Dispatcher')
    },

    /**
     * Aplicatii Vue
     */
    apps = {
        'roles': {
            creator: require('./App/Create'),
            component: require('comptechsoft-admin-modern').pages.simple.MainComponent
        }
    },

    /**
     * Components
     */
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