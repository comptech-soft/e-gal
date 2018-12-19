const AdminModern = require('comptechsoft-admin-modern').layout

module.exports = (store, App) => {

    return {
        el: '#app-nav',
        store,
        components: {
            'top-navigation': AdminModern.nav,
        },
        mounted(){
            this.$store.commit('getConfig')
        },
    }
}