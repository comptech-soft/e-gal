const Options = require('comptechsoft-ui').Menus.DefaultOptions

module.exports = {
    title: 'Locatii',
    toolbar: {
        'delete-all': Options.deleteAll()
    },
    actions: {
        refresh: Options.refresh(),
        download: Options.download(),
        upload: Options.upload()
    }
}