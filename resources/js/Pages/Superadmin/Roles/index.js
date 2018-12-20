/**
 * Clasa care incarca toate pluginurile, defineste obiectele Vue, etc
 * Pe baza ei se fac instantia obiectul "launcher"
 */
const Launcher = require('comptechsoft-core-libs').Launcher

$(document).ready( () => {

    /**
     * Obiectul care porneste aplicatia
     */
    let launcher = new Launcher('ComptechApp', window)
    launcher.Init()
    
    /**
     * Obiectul global "ComptechApp"
     * Contine Auth, Http, Dom, FormManager, VueManager etc
     */
    let App = launcher.App()

    /**
     * Store-ul Vue 
     * Acesta il definesc in App pentru ca poate detine chestii specifice
     */
    let store = require('./../../../App/Vue/Store/store')
    let storeInstance = new Vuex.Store(store)

    /**
     * Mixin-ul global Store
     */
    let storeMix = require('comptechsoft-core-libs').VUE.Mixins.Store
    launcher.RegisterMixin(storeMix)

    /**
     * Instantele Vue
     */
    let vueNav = require('./../../../App/Vue/Instances/Layout/Nav')(storeInstance, App)
    let vueSidebar = require('../../../App/Vue/Instances/Layout/Sidebar')(storeInstance, App)
    let contentComponent = require('./../../../App/Vue/Instances/Superadmin/Roles/Components/Content')
    let vueRoles = require('./../../../App/Vue/Instances/Superadmin/Roles/Roles')(storeInstance, App, contentComponent)
    
    launcher.RegisterApps({
        'app-nav': vueNav,
        'left-sidebar': vueSidebar,
        'roles': vueRoles,
    })
        
})