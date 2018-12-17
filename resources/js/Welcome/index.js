const Launcher = require('./../Libs/App/Launcher')
    
$(document).ready( () => {

    let plugins = {
        'FormManager': require('./../Libs/Form/Manager'),
    }
  
    let app = new Launcher('ComptechApp', window, plugins)
    app.VueMixins([
        require('./../EGal/Mixins/Store')
    ])

    app.CreateVueObject('app-nav', {
        el: '#app-nav',
        // router: new VueRouter({routes: require('./routes/routes')}),
        store: new Vuex.Store(require('./../EGal/Store/store')),
        components: {
            'top-navigation': require('./Nav')
        },
        mounted(){
            this.$store.commit('getConfig')
        },
    })

})