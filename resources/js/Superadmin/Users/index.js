const Launcher = require('./../../Libs/App/Launcher')
const Sidebar = require('./../../EGal/Sidebar/Sidebar')
const AdminModern = require('comptechsoft-admin-modern').layout

const Page = require('./../../EGal/Pages/Superadmin/Users/Users')

$(document).ready( () => {
  
    let app = new Launcher('ComptechApp', window)
    app.VueMixins([
        require('./../../EGal/Mixins/Store')
    ])

    let store = new Vuex.Store(require('./../../EGal/Store/store'))

    app.CreateVueObject('app-nav', {
        el: '#app-nav',
        store,
        components: {
            'top-navigation': AdminModern.nav,
        },
        mounted(){
            this.$store.commit('getConfig')
        },
    })

    app.CreateVueObject('left-sidebar', {
        el: '#left-sidebar',
        store,
        components: {
            'left-sidebar': AdminModern.sidebar,
        },
        methods: {
            onSidebarClick(option) {
                let sidebar = new Sidebar(app, this)
                return sidebar.Dispatch(option)
            }
        },
        mounted(){
            this.$store.commit('getSidebar')
        },
    })

    app.CreateVueObject('users', {
        el: '#app',
        data: {
            page: null,
        },
        store,
        components: {
            'users-page': require('./Users'),
        },
        methods: {
            init() {
                this.page = new Page()
                this.page.initPage()
            }
        },
        mounted(){
            this.init()
        },
    })

})