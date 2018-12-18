class Sidebar {

    constructor(app, vue) {
        this.app = app
        this.vue = vue
    }

    onLogin() {
        window[this.app.name].Http.redirect(100, this.vue.url + '/login')
    }

    onLogout() {
        window[this.app.name].Auth.logout(this.vue.url)
    }

    onRoles() {
        window[this.app.name].Http.redirect(100, this.vue.url + '/' + this.vue.role.slug + '/roles')
    }

    onUsers() {
        alert('Do you ??? Users');
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