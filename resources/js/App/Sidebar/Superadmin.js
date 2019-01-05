const Menu = require('comptechsoft-ui').Menu

let sidebar = new Menu('sidebar')

sidebar
    .AddOption('menu-users', () => {
        let menu = new Menu('users')
        menu
            .Caption('Utilizatori')
            .Icon('la la-users')
            .AddOption('option-roles', () => {
                let option = new Menu('roles')
                option
                    .Caption('Roluri')
                    .Icon('la la-file-text')
                    .Type('click')
                    .Click(v => v.app.Http.redirect(100, v.url + '/' + v.role.slug + '/roles'))
                return option
            })
            .AddOption('option-users', () => {
                let option = new Menu('users')
                option
                    .Caption('Utilizatori')
                    .Icon('la la-users')
                    .Type('click')
                    .Click(v => v.app.Http.redirect(100, v.url + '/' + v.role.slug + '/users'))
                return option
            })
        return menu
    })
    .AddOption('menu-locations', () => {
        let option = new Menu('locations')
        option
            .Caption('Țări, Localități, ...')
            .Icon('la la-map-marker')
            .Type('click')
            .Click(v => v.app.Http.redirect(100, v.url + '/' + v.role.slug + '/locations'))
        return option
    })
    .AddOption('menu-logout', () => {
        let option = new Menu('logout')
        option
            .Caption('Logout')
            .Icon('la la-sign-out')
            .Type('click')
            .Click(v => v.app.Auth.logout(v.url))
            
        return option
    })

module.exports = sidebar