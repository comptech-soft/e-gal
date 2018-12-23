const Index = require('comptechsoft-admin-modern').pages.simple.Index

Index.Run($, window, {
    name: 'ComptechApp',
    store: require('./../../../../App/Store/store'),
    sidebar: {
        dispatcher: require('./../../../../App/Sidebar/Dispatcher'),
    },
    apps: {
        'users': {
            creator: require('./CreateApp'),
            component: require('./Components/Content')
        }
    }
})
