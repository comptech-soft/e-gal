const 
    Page = require('comptechsoft-ui').Page,
    Menu = require('comptechsoft-ui').Menu,
    Grid = require('comptechsoft-ui').Grid,
    Column = require('comptechsoft-ui').Column,
    FormAction = require('comptechsoft-ui').FormAction

let page = new Page()

/** Header title */
page.header.setTitle('Roluri')

/** Header actions */
page.header.actions.AddOption('insert', () => {
    let option = new Menu('login')
    option
        .Title('Adaugă un rol nou')
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
})

/** Header breadcrumbs */
page.header.breadcrumbs.AddOption('home', () => {
    let option = new Menu('home')
    option
        .Title('Pagina principală')
        .Caption('Dashboard')
        .Type('click')
        .Click(v => v.app.Http.redirect(v.url))
    return option
}).AddOption('roles', () => {
    let option = new Menu('roles')
    option
        .Title('Pagina curentă')
        .Caption('Roluri')
        .Enabled(false)
    return option
})

/**
 * Body. Data
 */
page.body.data
    .Tag('simple-page-data')
    .With('title', 'Rourile utilizate în platformă')
    .With('toolbar', () => {
        let option = new Menu('toolbar')
        option.AddOption('delete-all', () => {
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
        })
        return option
    })
    .With('actions', () => {
        let option = new Menu('roles-actions')
        option
            .Icon('ft-settings white')
            .SetClass({
                'btn': true,
                'btn-primary': true,
                'dropdown-toggle': true,
                'dropdown-menu-right': true,
                'btn-sm': true,
            })
            .AddOption('refresh', () => {
                let option = new Menu('refresh')
                option
                    .Icon('ft-refresh-cw')
                    .Caption('Reîncarcă')
                    .Type('event')
                    .Event('action-click')
                    .Click(v => v.data_manager.populate())
                return option
            })
            .AddOption('download', () => {
                let option = new Menu('download')
                option
                    .Icon('ft-download')
                    .Caption('Exportă')
                return option
            })
            .AddOption('upload', () => {
                let option = new Menu('upload')
                option
                    .Icon('ft-upload')
                    .Caption('Importă')
                return option
            })
        return option
    })

/**
 * Body. Form
 */
page.body.form
    .Tag('role-form')
    .With('actions', () => {

        let insertAction = new FormAction('insert')
        insertAction
            .Endpoint('superadmin/roles/insert')
            .HeaderCaption('Adăugare')
            .HeaderTitle('Adăugare')
            .HeaderIcon('la la-plus')
            .ButtonCaption('Salvează')
            .ButtonTitle('Salvează')
            .ButtonIcon('la la-save')
            .ButtonColor('btn-primary')

        let updateAction = new FormAction('update')
        updateAction
            .Endpoint('superadmin/roles/update')
            .HeaderCaption('Modificare')
            .HeaderTitle('Modificare')
            .HeaderIcon('la la-pencil')
            .ButtonCaption('Salvează')
            .ButtonTitle('Salvează')
            .ButtonIcon('la la-save')
            .ButtonColor('btn-primary')

        let deleteAction = new FormAction('delete')
        deleteAction
            .Endpoint('superadmin/roles/delete')
            .HeaderCaption('Ștergere')
            .HeaderTitle('Ștergere')
            .HeaderIcon('la la-trash')
            .ButtonCaption('Șterge')
            .ButtonTitle('Șterge')
            .ButtonIcon('la la-trash')
            .ButtonColor('btn-danger')

        return {
            insert: insertAction, 
            update: updateAction, 
            delete: deleteAction
        }

    })

page.body.form.Show = (action, record) => {
    page.body.form.action = action
    page.body.form.record = record
    page.body.form.visible = true
}
/**
 * Data Manager
 */
let manager = {
    endpoint: 'superadmin/roles/get-records',
    per_page: 20,
    searchable: {
        placeholder: 'Caută rapid...',
        fields: ['roles.slug', 'roles.name'],
        value: null,
    },
    conditions: null,
    grid: (() => {
        let grid = new Grid('grid-roles')
        grid
            .DefaultOrder({
                key: 'slug',
                fields: ['roles.slug'],
                direction: 'asc'
            })
            .AddColumn('id', () => {
                let column = new Column('id')
                column
                    .Width(5)
                    .Caption('ID')
                    .OrderBy(['roles.id'], 'asc')
                    .Source('id')
                return column
            })
            .AddColumn('slug', () => {
                let column = new Column('slug')
                column
                    .Width(20)
                    .Caption('Slug')
                    .OrderBy(['roles.slug'], 'asc')
                    .Source('slug')
                return column
            })
            .AddColumn('name', () => {
                let column = new Column('name')
                column
                    .Width(30)
                    .Caption('Nume')
                    .OrderBy(['roles.name'], 'asc')
                    .Source('name')
                return column
            })
            .AddColumn('users_count', () => {
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
            })
            .AddColumn('created_at', () => {
                let column = new Column('created_at')
                column
                    .Width(10)
                    .Caption('Creat...')
                    .OrderBy(['roles.created_at'], 'asc')
                    .Source('created_at')
                return column
            })
            .AddColumn('updated_at', () => {
                let column = new Column('updated_at')
                column
                    .Width(10)
                    .Caption('Modificat...')
                    .OrderBy(['roles.updated_at'], 'asc')
                    .Source('updated_at')
                return column
            })
            .AddColumn('actions', () => {
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
                                    .Click( (v, record) => {
                                        alert('Update' + record.id)
                                    })
                                return option
                            })
                            .AddOption('delete', () => {
                                let option = new Menu('delete')
                                option
                                    .Icon('ft-trash-2 danger')
                                    .Caption( record => 'Șterge #' + record.id)
                                    .Click( (v, record) => {
                                        alert('Delete' + record.id)
                                    })
                                return option
                            })
                        return menu
                    })
                return column
            })

        return grid
    })()
}

module.exports = (store) => {

    return {
        el: '#app',
        data: {
            layout: null,
            grid: null,
            data_manager: null,
            records: [],
        },
        store,
        components: {
            'simple-page': require('comptechsoft-admin-modern').SimplePage,
        },
        methods: {
            Init() {
                this.layout = page
                this.grid = manager.grid
                this.data_manager = new this.app.DataManager(this, {
                    endpoint: manager.endpoint,
                    per_page: manager.per_page,
                    searchable: manager.searchable,
                    conditions: manager.conditions,
                    current_order: manager.grid.default_order
                })
                this.data_manager.populate()
            }
        },
        mounted(){
            this.Init()
        },
        name: 'simple-page-root-app'
    }

}