class Auth {

    constructor() {

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
                location.href = url
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

module.exports = new Auth()