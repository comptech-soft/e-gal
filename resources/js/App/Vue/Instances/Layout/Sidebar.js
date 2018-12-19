const AdminModern = require('comptechsoft-admin-modern').layout
const SidebarDispatcher = require('./../../../Sidebar/Dispatcher')

module.exports = (store, App) => {

    return {
        el: '#left-sidebar',
        store,
        components: {
            'left-sidebar': AdminModern.sidebar,
        },
        methods: {
            onSidebarClick(option) {
                let sidebar = new SidebarDispatcher(App, this)
                return sidebar.Dispatch(option)
            }
        },
        mounted(){
            this.$store.commit('getSidebar')
        },
    }
}