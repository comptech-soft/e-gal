/**
 * Left sidebar
 * .... se genereaza in functie de user si rolul acestuia
 * .... foloseste clasa Menu din comptechsoft-ui
 */
const Menu = require('comptechsoft-ui').Menu

module.exports = (user, role) => {

    let sidebar = new Menu('sidebar')
    
    if( user === false)
    {
        /**
         * Nu avem user logat 
         */
        sidebar.AddOption('menu-login', () => {
            let option = new Menu('login')
            option
                .Caption('Login')
                .Icon('la la-sign-in')
                .Click(v => v.app.Http.redirect(100, v.url + '/login'))
            return option
        })
        return sidebar
    }
    if( role && (role.slug === 'superadmin'))
    {
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
                            .Click(v => v.app.Http.redirect(100, v.url + '/' + v.role.slug + '/roles'))
                        return option
                    })
                    .AddOption('option-users', () => {
                        let option = new Menu('users')
                        option
                            .Caption('Utilizatori')
                            .Icon('la la-users')
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
                    .Click(v => v.app.Http.redirect(100, v.url + '/' + v.role.slug + '/locations'))
                return option
            })
            .AddOption('menu-logout', () => {
                let option = new Menu('logout')
                option
                    .Caption('Logout')
                    .Icon('la la-sign-out')
                    .Click(v => v.app.Auth.logout(v.url))
                    
                return option
            })
    }
    return sidebar
}