module.exports = {
    computed: {

        ...Vuex.mapGetters(['user', 'config', 'role', 'sidebar', 'ready']),

        url() {
            return this.$store.getters.config ? this.$store.getters.config.base_url : null
        },

        app_name() {
            return this.$store.getters.config ? this.$store.getters.config.name : null
        },

        /**
         * ???? Asta-i un pic "Hardcoded"
         * Aici continuam ....
         */
        app() {
            return window.ComptechApp
        }
    },
}