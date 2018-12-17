const Launcher = require('./../Libs/App/Launcher')
    

$(document).ready( () => {

    let plugins = {
        'FormManager': require('./../Libs/Form/Manager'),
        'Auth': require('./../Libs/Auth/Auth'),
    }
    
    let app = new Launcher('ComptechApp', window, plugins)

    app.CreateVueObject('app', {
        el: '#app',
        store: new Vuex.Store(require('./../Welcome/Store/store')),
        components: {
            'login-form': require('comptechsoft-admin-modern').pages.login,
        },
        mounted(){
            this.$store.commit('getConfig')
        },
    })

})