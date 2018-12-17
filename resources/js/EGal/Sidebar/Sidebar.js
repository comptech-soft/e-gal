class Sidebar {

    constructor(app, vue) {
        this.app = app
        this.vue = vue
    }

    onLogin() {
        console.log(this.app[this.app.name]);
        window[this.app.name].Http.redirect(100, this.vue.url + '/login')
    }

    Dispatch(option) {
        console.log('Sidebar Dispatch >> ' + option.event);
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