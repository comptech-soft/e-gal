class Sidebar {

    constructor(App) {
        this.App = App
        // this.vue = vue
    }

    attachVue(vue) {
        this.vue = vue
    }

    onLogin() {
        this.App.Http.redirect(100, this.vue.url + '/login')
    }

    onLogout() {
        this.App.Auth.logout(this.vue.url)
    }

    onRoles() {
        this.App.Http.redirect(100, this.vue.url + '/' + this.vue.role.slug + '/roles')
    }

    onUsers() {
        this.App.Http.redirect(100, this.vue.url + '/' + this.vue.role.slug + '/users')
    }

    Dispatch(option) {
        let method = 'on' + _.capitalize(option.event)
        try
        {
            this[method]()
        }
        catch(error)
        {
            console.log(method, error);
        }
    }
}

module.exports = Sidebar