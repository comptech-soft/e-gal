const CreatePageLayout = require('comptechsoft-admin-modern').SimplePage.PageLayout

module.exports = CreatePageLayout({
    header: require('./Header'),
    data: require('./Data'),
    form: require('./Form')
})