const PageContent = require('./Page/PageContent')

module.exports = (store, App, component) => {

    return {
        el: '#app',
        data: {
            /**
             * The page manager container object
             */
            page_content: null,
            data_manager: null,
            records: [],
        },
        store,
        components: {
            'roles-page': component,
        },
        methods: {
            Init() {
                this.page_content = new PageContent()
                this.page_content.Init()
                this.data_manager = new this.app.DataManager(this, 'superadmin/roles/get-records')
                this.data_manager.populate()
            }
        },
        mounted(){
            this.Init()
        },
        name: 'roles-root-app'
    }
}