module.exports = {
    computed: {

        ...Vuex.mapGetters(['user', 'config', 'role', 'ready']),

        url() {
            return document.head.querySelector('meta[name="base-url"]').content
        },

        appName() {
            return this.$store.getters.config ? this.$store.getters.config.name : null
        }
    },
}