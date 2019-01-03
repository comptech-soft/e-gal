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

    getSidebar(state) {
        let i = setInterval( () => {
            if( state.ready )
            {
                /**
                 * state.user === false ==> nu avem user logat
                 * ........................ nu avem li.dropdown-notification
                 */
                state.sidebar.options = require('./../Sidebar/Sidebar')(state.user, state.role)
                state.sidebar.ready = true
                if(state.config && state.config.base_url)
                {
                    if(
                        $('i#icon-toggle').length 
                        * $('#main-menu-navigation').length 
                        * $('#navbar-mobile').length 
                        // * $('li.dropdown-notification').length 
                        // * $('#main-menu-navigation').length
                    )
                    {
                        clearInterval(i);
                        $.app.menu.init(false);
                        $.app.nav.init({speed: 300})
                        if($('.scrollable-container').length > 0){
                            $('.scrollable-container').perfectScrollbar({
                                theme:"dark"
                            });
                        }
                    }     
                }
                else 
                {
                    clear
                }
            }
        }, 500) 
    },


}
