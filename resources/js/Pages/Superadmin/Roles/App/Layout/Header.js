const MenuOptions = require('./../../../../../Helpers/Menu/MenuOptions')

module.exports = {
    title: 'Roluri',
    actions: {
        insert: MenuOptions.insert('Adaugă un rol nou')
    },
    breadcrumbs: {
        home: MenuOptions.home(),
        current: MenuOptions.current('Roluri')
    }
}