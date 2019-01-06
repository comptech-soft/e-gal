const VueApp = (store, page, manager) => {

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

module.exports = VueApp