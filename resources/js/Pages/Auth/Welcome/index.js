const 
    Run = require('comptechsoft-apps').Auth.Welcome,
    store = require('./../../../App/Store/store'),
    sidebar = null,
    apps = {}

Run('ComptechApp', $, window, store, sidebar, apps)