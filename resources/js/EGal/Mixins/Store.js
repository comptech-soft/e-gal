module.exports = {
    computed: {

        ...Vuex.mapGetters(['user', 'config', 'role', 'sidebar', 'ready']),

        url() {
            return this.$store.getters.config ? this.$store.getters.config.base_url : null
        },

        app_name() {
            return this.$store.getters.config ? this.$store.getters.config.name : null
        },

        app() {
            return window.ComptechApp
        }
    },
}