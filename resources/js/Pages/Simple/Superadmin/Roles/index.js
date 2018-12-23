const Index = require('comptechsoft-admin-modern').pages.simple.Index
Index.Run($, window, {
    name: 'ComptechApp',
    store: require('./../../../../App/Store/store'),
    sidebar: {
        dispatcher: require('./../../../../App/Sidebar/Dispatcher'),
    },
    apps: {
        'roles': {
            creator: require('./../../../../App/Vue/Instances/Superadmin/Roles/Main'),
            component: require('./../../../../App/Vue/Instances/Superadmin/Roles/Components/Content')
        }
    }
})
