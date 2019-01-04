const Page = require('comptechsoft-ui').Page
const Menu = require('comptechsoft-ui').Menu

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
        .Click(v => v.formShow('insert', null))
        .Enabled(null/* v => ! v.formVisible() */)
    return option
})

/** Header breadcrumbs */
page.header.breadcrumbs.AddOption('home', () => {
    let option = new Menu('home')
    option
        .Title('Pagina principală')
        .Caption('Dashboard')
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

module.exports = (store) => {

    return {
        el: '#app',
        data: {
            layout: null,
            data_manager: null,
            records: [],
        },
        store,
        components: {
            'simple-page': require('comptechsoft-admin-modern').pages.simple.MainComponent,
        },
        methods: {
            Init() {
                this.layout = page
                this.data_manager = new this.app.DataManager(this, {
                    // endpoint: options.endpoint,
                    // per_page: options.per_page,
                    // searchable: options.searchable,
                    // conditions: options.conditions,
                    // current_order: this.page_manager.content_body.data_section.defaultOrder()
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