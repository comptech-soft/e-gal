module.exports = {
    'home': {
        active: false,
        caption: 'Dashboard',
        click: (vue) => {
            vue.app.Http.redirect(vue.url)
        }
    },
    'users': {
        active: true,
        caption: 'Utilizatori',
        click: null
    }
}