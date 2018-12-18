const Page = require('./../../Pages/Superadmin/Roles/Roles')

module.exports = (store, App, component) => {

    return {
        el: '#app',
        data: {
            page: null,
        },
        store,
        components: {
            'roles-page': component,
        },
        methods: {
            init() {
                this.page = new Page()
                this.page.initPage()
            }
        },
        mounted(){
            this.init()
        },
    }
}