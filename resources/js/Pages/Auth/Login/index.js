const 
    Run = require('comptechsoft-apps').Auth.Login,
    store = new Vuex.Store(require('./../../../App/Store/store'))

Run('ComptechApp', window, store)