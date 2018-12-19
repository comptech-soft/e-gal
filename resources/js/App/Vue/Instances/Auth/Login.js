module.exports = {
    el: '#app',
    store: new Vuex.Store(require('../../Store/store')),
    components: {
        'login-form': require('comptechsoft-admin-modern').pages.login,
    },
    mounted(){
        this.$store.commit('getConfig')
    },
}