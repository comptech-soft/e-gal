const Launcher = require('./../Libs/App/Launcher')
    
$(document).ready( () => {

    let app = new Launcher('ComptechApp', window)

    app.VueMixins([
        require('./../EGal/Mixins/Store')
    ])

    app.CreateVueObject('app', {
        el: '#app',
        store: new Vuex.Store(require('./../EGal/Store/store')),
        components: {
            'login-form': require('comptechsoft-admin-modern').pages.login,
        },
        mounted(){
            this.$store.commit('getConfig')
        },
    })

})