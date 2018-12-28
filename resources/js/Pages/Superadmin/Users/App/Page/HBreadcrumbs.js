module.exports = {
    'home': {
        active: false,
        caption: 'Dashboard',
        click: v => v.app.Http.redirect(v.url)
    },
    'users': {
        active: true,
        caption: 'Utilizatori',
        click: null
    }
}