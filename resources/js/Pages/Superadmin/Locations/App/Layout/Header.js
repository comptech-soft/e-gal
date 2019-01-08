const Options = require('comptechsoft-ui').Menus.DefaultOptions

module.exports = {
    title: 'Locatii...',
    actions: {
        insert: Options.insert('Adaugă')
    },
    breadcrumbs: {
        home: Options.home(),
        current: Options.current('Locatii')
    }
}