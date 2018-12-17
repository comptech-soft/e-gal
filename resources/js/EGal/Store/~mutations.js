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
        state.sidebar.ready = false
        return axios.request({
            method: 'post', 
            url: 'get-left-sidebar', 
            data: {},
        })
        .then( r => {
            state.sidebar.options = r.data.sidebar
            state.sidebar.ready = true

            let i = setInterval( () => {
                if(state.ready && state.config)
                {
                    if(state.config.base_url) 
                    {
                        /**
                         * Cu patch-ul asta am reusit sa fac sa se vada meniurile
                         * asa ca in html-ul primit
                         */
                        if(
                            $('i#icon-toggle').length * 
                            $('#main-menu-navigation').length * 
                            $('#navbar-mobile').length * 
                            $('li.dropdown-notification').length
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
                }
            }, 100)

        })
        .catch( error => {
            console.log('ERROR.Store Mutations::getSidebar()')
            console.log(error)
        })
    },


}
