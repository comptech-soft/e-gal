const Options = require('comptechsoft-ui').Menus.DefaultOptions

module.exports = {
    title: 'Roluri',
    actions: {
        insert: Options.insert('Adaugă un rol nou')
    },
    breadcrumbs: {
        home: Options.home(),
        current: Options.current('Roluri')
    }
}