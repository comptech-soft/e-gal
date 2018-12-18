<template>
    <div class="content-header row">
        <div class="content-header-left col-md-6 col-12 mb-2">
            <!-- Header page title -->
            <h3 class="content-header-title">{{ title }}</h3>
            
            <!-- Breadcrumbs -->
            <div v-if="breadcrumbs" class="row breadcrumbs-top">
                <breadcrumbs
                    :breadcrumbs="breadcrumbs"
                >
                </breadcrumbs>
                
            </div>
        </div>
        <div class="content-header-right col-md-6 col-12">
            <div class="btn-group float-md-right" role="group" aria-label="Button group with nested dropdown">   
                <button class="btn btn-info round dropdown-toggle dropdown-menu-right box-shadow-2 px-2" id="btnGroupDrop1" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="ft-settings icon-left"></i> Settings</button>
                <div class="dropdown-menu" aria-labelledby="btnGroupDrop1"><a class="dropdown-item" href="card-bootstrap.html">Cards</a><a class="dropdown-item" href="component-buttons-extended.html">Buttons</a></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            title: {type: String, default: 'My Page Title'},
            breadcrumbs: {default: null}       
        },

        components: {
            breadcrumbs: require('./Breadcrumbs')
        }
    }
</script>

