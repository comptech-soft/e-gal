const CreateApp = require('comptechsoft-admin-modern').pages.simple.CreateApp

module.exports = CreateApp.Create({
    endpoint: 'superadmin/users/get-records',
    per_page: 20,
    content_manager: require('./Page/Manager'),
    searchable: require('./Page/Content/Searcheable')
})

