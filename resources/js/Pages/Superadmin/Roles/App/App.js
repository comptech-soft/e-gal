const Page = require('comptechsoft-ui').Page
const Menu = require('comptechsoft-ui').Menu

let page = new Page()
page.header.setTitle('Roluri')
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