const Page = require('comptechsoft-ui').Page

let page = new Page()
page.header.setTitle('Localitati, Regiuni, Judete, Tari')

console.log(page);

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