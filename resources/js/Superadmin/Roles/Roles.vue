<template>
    
    <div class="content-wrapper">
        <content-header
            :title="page_manager.header.title"
            :breadcrumbs="page_manager.header.breadcrumbs.list"
        >
        </content-header>    
    </div>

</template>

<script>
    export default {
        
        props: {
            page_manager: {type: Object, required: true}
        },
        
        components: {
            'content-header': require('./../Header')
        }
    }
</script>
