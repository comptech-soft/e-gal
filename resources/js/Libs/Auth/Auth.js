class Auth {

    constructor(app) {
        this.app = app
    }

    logout(url) {
        try
        {
            return axios.request({
                method: 'post', 
                url: 'logout', 
                data: {},
            })
            .then( r => {
                this.app.Http.redirect(url)
            })
            .catch( error => {
                console.log('ERROR. Auth::logout()')
                console.log(error)
            })
        }
        catch(error)
        {
            console.log('ERROR. Auth::logout()')
            console.log(error)
        }
    }
}

module.exports = Auth