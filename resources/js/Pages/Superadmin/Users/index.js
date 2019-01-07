/** 
 * Superadmin. Users page 
 */

/** The runner */
const Boot = require('comptechsoft-admin-modern').Boot
const Run = Boot('ComptechApp', require('./../../../App/Store/store') )

/** Vue Apps */
// const apps = {
//     'users': require('./App/App')
// }

/** Vue components */
// const components = {
//     'simple-page-data': require('comptechsoft-admin-modern').Data,
//     'simple-page-filter': null,
//     'simple-page-form': require('./App/Components/Form'),
// }

Run(apps, components)

// /**
//  * Vue root application ...... : "Users"
//  */
// const 

//     /** Numele global al containerilui */
//     name = 'ComptechApp',

//     /** Store-ul comun */
//     store = require('../../../App/Store/store'),

//     /** Sidebarul comun */
//     sidebar = null,

//     /** Vue root apps */
//     apps = {
//         'roles': {
//             creator: require('./App/Create'),
//             component: require('comptechsoft-admin-modern').pages.simple.MainComponent
//         }
//     },

//     /** Vue Components */
//     components = {
//         'simple-page-filter': require('./App/Components/Filter'),
//         'simple-page-data': require('comptechsoft-admin-modern').pages.simple.DataComponent,
//         'user-form': require('./App/Components/Form'),
//     },

//     /**
//      * Main Index
//      */
//     Index = require('comptechsoft-admin-modern').pages.simple.Index

// Index.Run($, window, {name, store, sidebar, apps, components})