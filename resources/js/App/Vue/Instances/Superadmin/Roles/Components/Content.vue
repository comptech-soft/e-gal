<template>
    <div class="content-wrapper">
        <!-- 
            Headerul paginii
            Este standardizat in comptechsoft-admin-modern.layout.content.header
        -->
        <content-header
            :title="page_manager.content_header.title"
            :breadcrumbs="page_manager.content_header.breadcrumbs.list"
            :actions="page_manager.content_header.actions"
            :records="records"
        >
        </content-header> 

        <!-- 
            Bodyul paginii 
            Inca nu este standardizat
        -->
        <content-body
            :filter_section="page_manager.content_body.filter_section"
            :data_section="page_manager.content_body.data_section"
            :records="records"
        >
        </content-body> 
    </div>
</template>

<script>
    /**
     * Aceasta este componenta principala "roles_page"
     * Este imedoat sub RootApp
     * Ar trebui sa fie generala pentru pagini de acest tip
     * 
     * page_manager: vine din data() de la instanta Vue
     * ............. este un obiect Page/Manager
     */
    export default {
        
        props: {
            page_manager: {type: Object, required: true},
            data_manager: {type: Object, required: true},
            records: {type: Array, default: () => []},
        },
        
        components: {
            'content-header': require('comptechsoft-admin-modern').layout.content.header,
            'content-body': require('./Body/Body')
        },

        name: 'superadmin-roles-page'
    }
</script>
