<template>
    <button 
        type="button" 
        class="btn btn-info btn-lg btn-block"

        @click="$emit('click')"
    >
        <i 
            v-if="icon"
            :class="icon">
        </i> 

        {{ caption }}
    </button>
</template>


<script>
    export default {
        props: {
            caption: {type: String, default: ''},
            icon: {type: String, default: ''}
        }        
    }
</script>

