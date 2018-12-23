
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
            'simple-page': component,
        },
        methods: {
            Init() {
                this.page_content = new PageContent()
                this.page_content.Init()
                this.data_manager = new this.app.DataManager(this, {
                    endpoint: 'superadmin/roles/get-records',
                    per_page: 1,
                })
                this.data_manager.populate()
            }
        },
        mounted(){
            this.Init()
        },
        name: 'roles-root-app'
    }
}