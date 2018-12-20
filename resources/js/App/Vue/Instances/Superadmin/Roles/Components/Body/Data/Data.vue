<template>    
    <div class="card">
        <data-header
            :title="header.title"
            :toolbar="header.toolbar"
            :actions="header.actions"
        >
        </data-header>

        <data-presentation
            :presentation="presentation"
        >
        </data-presentation>
    </div>
</template>

<script>
    export default {

        props: {
            header: {required: true},
            presentation: {required: true},
        },

        components: {
            'data-header': require('comptechsoft-admin-modern').layout.body.data.header,
            'data-presentation': require('comptechsoft-admin-modern').layout.presentation
        }
    }
</script>
