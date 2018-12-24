const 
    Run = require('comptechsoft-apps').Auth.Welcome,
    store = require('./../../../App/Store/store'),
    sidebar = {
        dispatcher: require('./../../../App/Sidebar/Dispatcher'),
    },
    apps = {}

Run('ComptechApp', $, window, store, sidebar, apps)