module.exports = {

    getConfig(state) {

        state.ready = false
        return axios.request({
            method: 'post', 
            url: 'get-app-configs', 
            data: {},
        })
        .then( r => {
            state.user = r.data.user
            state.config = r.data.config
            state.role = r.data.role
            state.ready = true
        })
        .catch( error => {
            console.log('ERROR.Store Mutations::getConfig()')
            console.log(error)
        })
    },


}
