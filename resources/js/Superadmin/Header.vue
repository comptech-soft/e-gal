<template>
    <div class="content-header row">
        <div class="content-header-left col-md-6 col-12 mb-2">
            <!-- Header page title -->
            <h3 class="content-header-title">{{ title }}</h3>
            
            <!-- Header Page Breadcrumbs -->
            <div v-if="breadcrumbs" class="row breadcrumbs-top">
                <breadcrumbs :breadcrumbs="breadcrumbs"></breadcrumbs>
            </div>
        </div>

        <div v-if="actions" class="content-header-right col-md-6 col-12">
            <!-- Header Page Actions -->
            <actions :actions="actions"></actions>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            title: {type: String, default: 'My Page Title'},
            breadcrumbs: {default: null},
            actions: {default: null}       
        },

        components: {
            breadcrumbs: require('./Breadcrumbs'),
            actions: require('./Actions')
        }
    }
</script>

