const MenuOptions = require('./../../../../../Helpers/Menu/MenuOptions')

module.exports = {
    title: 'Rourile utilizate în platformă',
    toolbar: {
        'delete-all': MenuOptions.deleteAll()
    },
    actions: {
        refresh: MenuOptions.refresh(),
        download: MenuOptions.download(),
        upload: MenuOptions.upload()
    }
}