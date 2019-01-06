const 
    CreatePageLayout = require('./../../../../Helpers/CreatePageLayout'),
    CreateDataManager = require('./../../../../Helpers/CreateDataManager'),
    MenuOptions = require('./../../../../Helpers/MenuOptions'),
    Menu = require('comptechsoft-ui').Menu,
    Column = require('comptechsoft-ui').Column

let page = CreatePageLayout({

    header: {
        title: 'Roluri',
        actions: {
            insert: MenuOptions.insert('Adaugă un rol nou')
        },
        breadcrumbs: {
            home: MenuOptions.home(),
            current: MenuOptions.current('Roluri')
        }
    },

    data: {
        title: 'Rourile utilizate în platformă',
        toolbar: {
            'delete-all': MenuOptions.deleteAll()
        },
        actions: {
            refresh: MenuOptions.refresh(),
            download: MenuOptions.download(),
            upload: MenuOptions.upload()
        }
    },

    form: {
        insert: {
            endpoint: 'superadmin/roles/insert'
        },
        update: {
            endpoint: 'superadmin/roles/update'
        },
        delete: {
            endpoint: 'superadmin/roles/delete'
        }
    }

})

let manager = CreateDataManager({
    endpoint: 'superadmin/roles/get-records',
    per_page: 20,
    searchable: {
        placeholder: 'Caută rapid...',
        fields: ['roles.slug', 'roles.name'],
        value: null,
    },
    conditions: null,
    default_order: {
        key: 'slug',
        fields: ['roles.slug'],
        direction: 'asc'
    },
    columns: {
        id: () => {
            let column = new Column('id')
            column
                .Width(5)
                .Caption('ID')
                .OrderBy(['roles.id'], 'asc')
                .Source('id')
            return column
        },
        slug: () => {
            let column = new Column('slug')
            column
                .Width(20)
                .Caption('Slug')
                .OrderBy(['roles.slug'], 'asc')
                .Source('slug')
            return column
        },
        name: () => {
            let column = new Column('name')
            column
                .Width(30)
                .Caption('Nume')
                .OrderBy(['roles.name'], 'asc')
                .Source('name')
            return column
        },
        users_count: () => {
            let column = new Column('users_count')
            column
                .Width(10)
                .Caption('Utilizatori')
                .OrderBy(['users_count'], 'asc')
                .Source('users_count')
                .ControlStyle({
                    'text-align': 'right'
                })
            return column
        },
        created_at: () => {
            let column = new Column('created_at')
            column
                .Width(10)
                .Caption('Creat...')
                .OrderBy(['roles.created_at'], 'asc')
                .Source('created_at')
            return column
        },
        updated_at: () => {
            let column = new Column('updated_at')
            column
                .Width(10)
                .Caption('Modificat...')
                .OrderBy(['roles.updated_at'], 'asc')
                .Source('updated_at')
            return column
        },
        actions: () => {
            let column = new Column('actions')
            column
                .Width(5)
                .Caption('Acțiuni')
                .Component('actions')
                .Type(null)
                .Actions( () => {
                    let menu = new Menu('record-actions')
                    menu
                        .AddOption('update', () => {
                            let option = new Menu('update')
                            option
                                .Icon('ft-edit-2')
                                .Caption( record => 'Editează #' + record.id)
                                .Type('event')
                                .Click( (v, record) => v.FormShow('update', record))
                            return option
                        })
                        .AddOption('delete', () => {
                            let option = new Menu('delete')
                            option
                                .Icon('ft-trash-2 danger')
                                .Caption( record => 'Șterge #' + record.id)
                                .Type('event')
                                .Click( (v, record) => v.FormShow('delete', record))
                            return option
                        })
                    return menu
                })
            return column
        }
    }
})

module.exports = (store) => require('../../../../Helpers/VueSimplePageApp')(store, page, manager)