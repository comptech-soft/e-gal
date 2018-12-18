const PageManager = require('../../Pages/Superadmin/Roles/Manager')

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
                this.page = new PageManager()
                this.page.Init()
            }
        },
        mounted(){
            this.init()
        },
    }
}