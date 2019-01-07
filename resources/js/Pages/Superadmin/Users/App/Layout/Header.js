const Options = require('comptechsoft-ui').Menus.DefaultOptions

module.exports = {
    title: 'Utiizatori',
    actions: {
        insert: Options.insert('Adaugă un utilizator nou')
    },
    breadcrumbs: {
        home: Options.home(),
        current: Options.current('Utilizatori')
    }
}