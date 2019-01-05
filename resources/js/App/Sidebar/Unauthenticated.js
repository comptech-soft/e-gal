const Menu = require('comptechsoft-ui').Menu

let sidebar = new Menu('sidebar')

sidebar.AddOption('menu-login', () => {
    let option = new Menu('login')
    option
        .Caption('Login')
        .Icon('la la-sign-in')
        .Click(v => v.app.Http.redirect(100, v.url + '/login'))
        .Type('click')
    return option
})

module.exports = sidebar