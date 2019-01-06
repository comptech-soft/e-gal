const Menu = require('comptechsoft-ui').Menu

module.exports = {

    home: (title = 'Pagina principală', caption = 'Dashboard') => {
        return () => {
            let option = new Menu('home')
            option
                .Title(title)
                .Caption(caption)
                .Type('click')
                .Click(v => v.app.Http.redirect(v.url))
            return option
        }
    },

    current: (caption, title = 'Pagina curentă') => {
        return () => {
            let option = new Menu('current')
            option
                .Title(title)
                .Caption(caption)
                .Enabled(false)
            return option
        }
    },

    deleteAll: () => {
        return () => {
            let option = new Menu('delete-all')
            option
                .Icon('ft-trash white')
                .Caption('Șterge tot')
                .Title('Șterge toate înregistrarile')
                .SetClass({
                    'btn': true,
                    'btn-data-toolbar': true,
                    'btn-sm': true,
                    'btn-danger': true,
                })
                .Type('click')
                .Click(v => {alert('Ai grijeeee!!!!')})
            return option
        }
    },

    refresh: () => {
        return () => {
            let option = new Menu('refresh')
            option
                .Icon('ft-refresh-cw')
                .Caption('Reîncarcă')
                .Type('event')
                .Event('action-click')
                .Click(v => v.data_manager.populate())
            return option
        }
    },

    download: () => {
        return () => {
            let option = new Menu('download')
            option
                .Icon('ft-download')
                .Caption('Exportă')
            return option
        }
    },

    upload: () => {
        return () => {
            let option = new Menu('upload')
            option
                .Icon('ft-upload')
                .Caption('Importă')
            return option
        }
    },

    insert: (title = 'Adaugă') => {
        return () => {
            let option = new Menu('insert')
            option
                .Title(title)
                .Icon('la la-file')
                .SetClass({
                    'btn': true,
                    'btn-icon': true,
                    'btn-sm': true,
                    'btn-primary': true,
                })
                .Type('event')
                .Click(v => v.FormShow('insert', null))
                .Enabled(null/* v => ! v.formVisible() */)
            return option
        }
    }
}