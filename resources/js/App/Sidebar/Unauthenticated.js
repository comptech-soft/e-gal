const CreateMenu = require('comptechsoft-ui').Menus.Create

module.exports = 
    CreateMenu('sidebar', {})
    .AddOption('login', CreateMenu('login', {
        caption: 'Login',
        icon: 'la la-sign-in',
        clicktype: 'click',
        onClick: v => v.app.Http.redirect(100, v.url + '/login')
    }))