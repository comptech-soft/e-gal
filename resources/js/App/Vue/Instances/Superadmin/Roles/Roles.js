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
            init() {
                this.page = new PageManager(this)
                this.page.Init()
            }
        },
        mounted(){
            this.init()
        },
    }
}