const PageManager = require('./Page/Manager')

module.exports = (store, App, component) => {

    return {
        el: '#app',
        data: {
            /**
             * The page manager container object
             */
            page: null,
        },
        store,
        components: {
            'roles-page': component,
        },
        methods: {

            populate() {
                this.page.page_manager.populate()
            },

            init() {
                this.page = new PageManager(this)
                this.page.Init()
                this.populate()
            }
        },
        mounted(){
            this.init()
        },
    }
}