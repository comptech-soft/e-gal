/**
 * Login
 */
const 
    Runer = require('comptechsoft-core-libs').Runer,
    store = new Vuex.Store(require('../../../App/Store/store')) 

Runer.Run($, window, {
    name: 'ComptechApp',
    apps: {
        'login': {
            el: '#app',
            store,
            components: {
                'login-form': require('comptechsoft-admin-modern').pages.login,
            },
            mounted(){
                this.$store.commit('getConfig')
            },
        }
    }
})