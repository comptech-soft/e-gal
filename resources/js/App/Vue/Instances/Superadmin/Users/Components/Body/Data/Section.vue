<template>    
    <div class="card">
        <!-- 
            Este standardizata in comptechsoft-admin-modern.body.data.header
        -->
        <data-header
            :title="header.title"
            :toolbar="header.toolbar"
            :actions="header.actions"
            :records="records"
        >
        </data-header>

        <!-- 
            Este standardizata in comptechsoft-admin-modern.layout.presentation
        -->
        <data-presentation
            :presentation="presentation"
            :records="records"
            :data_manager="data_manager"
            @per_page_selected="onPerPageSelected"
            @quick-search="onQuickSearch"
        >
        </data-presentation>
    </div>
</template>

<script>
    export default {

        props: {
            header: {required: true},
            presentation: {required: true},
            records: {type: Array, default: []},
            data_manager: {type: Object, required: true},
        },

        methods: {
            onPerPageSelected(per_page) {
                this.$emit('per_page_selected', per_page)
            },

            onQuickSearch(searched) {
                this.$emit('quick-search', searched)
            }
        },

        components: {
            'data-header': require('comptechsoft-admin-modern').layout.body.data.header,
            'data-presentation': require('comptechsoft-admin-modern').layout.presentation
        }
    }
</script>
