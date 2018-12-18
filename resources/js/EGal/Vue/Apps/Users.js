const Page = require('../../Pages/Superadmin/Users/Users')

module.exports = (store, App, component) => {

    return {
        el: '#app',
        data: {
            page: null,
        },
        store,
        components: {
            'users-page': component,
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