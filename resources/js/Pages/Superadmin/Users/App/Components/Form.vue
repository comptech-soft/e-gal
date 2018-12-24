<template>
    <div class="card">

        <div class="card-header">
	                <h4 class="card-title">Project Info</h4>
	                <a class="heading-elements-toggle"><i class="la la-ellipsis-v font-medium-3"></i></a>
        <div class="heading-elements">
	                    <ul class="list-inline mb-0">
	                        <li><a data-action="close" @click.prevent="$emit('close')"><i class="ft-x"></i></a></li>
	                    </ul>
	                </div>
	            </div>


        <div class="card-content">
            <div class="card-body">
                <h4 class="card-title info">Text Align Left</h4>
                <p class="card-text">{{ form }}</p>
                <a href="#" class="btn btn-outline-info">Go somewhere</a>
            </div>
        </div>

        <div class="card-footer border-top-blue-grey border-top-lighten-5 text-muted">
            <span class="float-left">3 hours ago</span>
            <span class="float-right">
                <a href="#" class="card-link">Read More <i class="la la-angle-right"></i></a>
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            form: {required: true}
        }
    }
</script>
