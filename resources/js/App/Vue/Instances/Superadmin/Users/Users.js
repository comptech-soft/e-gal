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
            'users-page': component,
        },
        methods: {
            init() {
                this.page = new PageManager()
                this.page.Init()
            }
        },
        mounted(){
            this.init()
        },
    }
}