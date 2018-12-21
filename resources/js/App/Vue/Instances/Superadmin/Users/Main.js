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
            'users-page': component,
        },
        methods: {

            Init() {
                this.page_content = new PageContent()
                this.page_content.Init()
                this.data_manager = new this.app.DataManager(this, {
                    endpoint: 'superadmin/users/get-records',
                    per_page: 20,
                    searchable: {
                        placeholder: 'Caută rapid aicia...',
                        fields: ['users.email'],
                        value: null,
                    },
                    current_order: this.page_content.page_manager.content_body.data_section.presentation.table.default_order
                })
                this.data_manager.populate()
            }
        },
        mounted(){
            this.Init()
        },
        name: 'users-root-app'
    }
}