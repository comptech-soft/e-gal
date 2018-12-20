<template>
    <div class="content-wrapper">
        
        <!-- 
            Headerul paginii
            Este standardizat in comptechsoft-admin-modern.layout.content.header
        -->
        <content-header
            :title="page_manager.header.title"
            :breadcrumbs="page_manager.header.breadcrumbs.list"
            :actions="page_manager.header.actions"
        >
        </content-header> 

        <!-- 
            Bodyul paginii 
            Inca nu este standardizat
        -->
        <content-body
            :filter="page_manager.body.filter"
            :data="page_manager.body.data"
        >
        </content-body> 
    </div>
</template>

<script>
    /**
     * Aceasta este componenta principala
     * Ar trebui sa fie generala pentru pagini de acest tip
     * 
     * page_manager: vine din data() de la instanta Vue
     * ............. este un obiect Page/Manager
     */
    export default {
        
        props: {
            page_manager: {type: Object, required: true}
        },
        
        components: {
            'content-header': require('comptechsoft-admin-modern').layout.content.header,
            'content-body': require('./Body/Body')
        },

        name: 'superadmin-roles-page'
    }
</script>
