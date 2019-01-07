const CreateMenu = require('comptechsoft-ui').Menus.Create

module.exports = 
    CreateMenu('sidebar', {})
    .AddOption('users', 
        CreateMenu('users', {caption: 'Utilizatori', icon: 'la la-users'})
        .AddOption('option-roles', CreateMenu('roles', {
            caption: 'Roluri',
            icon: 'la la-file-text',
            clicktype: 'click',
            onClick: v => v.app.Http.redirect(100, v.url + '/' + v.role.slug + '/roles')
        }))
        .AddOption('option-users', CreateMenu('users', {
            caption: 'Utilizatori',
            icon: 'la la-users',
            clicktype: 'click',
            onClick: v => v.app.Http.redirect(100, v.url + '/' + v.role.slug + '/users')
        })))
    .AddOption('locations', CreateMenu('locations', {
        caption: 'Țări, Localități, ...',
        icon: 'la la-map-marker',
        clicktype: 'click',
        onClick: v => v.app.Http.redirect(100, v.url + '/' + v.role.slug + '/locations')
    }))
    .AddOption('logout', CreateMenu('logout', {
        caption: 'Logout',
        icon: 'la la-sign-out',
        clicktype: 'click',
        onClick: v => v.app.Auth.logout(v.url)
    }))