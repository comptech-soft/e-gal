const Menu = require('comptechsoft-ui').Menu

const CreateMenu = (name, menu) => {

    let m = new Menu(name)
    let properties = {
        title: 'Title', 
        caption: 'Caption', 
        type: 'Type', 
        click: 'Click',
        enabled: 'Enabled',
        icon: 'Icon',
        option_class: 'SetClass',
        event: 'Event',
    }

    _.each(properties, (method, property) => {

        if( menu.hasOwnProperty(property) ) 
        {
            m[method](menu[property])
        }
    })

    return m

}
module.exports = {

    home: (title = 'Pagina principală', caption = 'Dashboard') => {
        return () => {
            return CreateMenu('home', {
                title, 
                caption, 
                type: 'click', 
                click: v => v.app.Http.redirect(v.url)
            })
        }
    },

    current: (caption, title = 'Pagina curentă') => {
        return () => {
            return CreateMenu('current', {
                title, 
                caption, 
                enabled: false
            })
        }
    },

    deleteAll: () => {
        return () => {
            return CreateMenu('home', {
                icon: 'ft-trash white',
                title: 'Șterge toate înregistrarile', 
                caption: 'Șterge tot', 
                option_class: {
                    'btn': true,
                    'btn-data-toolbar': true,
                    'btn-sm': true,
                    'btn-danger': true,
                },
                type: 'click', 
                click: v => {alert('Ai grijeeee!!!!')}
            })
        }
    },

    refresh: () => {
        return () => {
            return CreateMenu('refresh', {
                icon: 'ft-refresh-cw',
                caption: 'Reîncarcă', 
                type: 'event', 
                event: 'action-click',
                click: v => v.data_manager.populate()
            })
        }
    },

    download: () => {
        return () => {
            return CreateMenu('download', {
                icon: 'ft-download',
                caption: 'Exportă', 
            })
        }
    },

    upload: () => {
        return () => {
            return CreateMenu('upload', {
                icon: 'ft-upload',
                caption: 'Importă', 
            })
        }
    },

    insert: (title = 'Adaugă', caption = 'Adaugă') => {
        return () => {
            return CreateMenu('insert', {
                icon: 'la la-file',
                title,
                caption, 
                option_class: {
                    'btn': true,
                    'btn-icon': true,
                    'btn-sm': true,
                    'btn-primary': true,
                },
                type: 'event', 
                click: v => v.FormShow('insert', null),
                enabled: null, //  v => ! v.formVisible()
            })
        }
    }
}