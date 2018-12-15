<template>
    <a 
        :href="url" 
        class="card-link"
        @click="$emit('click')"
    >
        {{ caption }}
    </a>
</template>

<script>
    export default {
        props: {
            caption: {type: String, default: ''},
            url: {default: '#'}
        }        
    }
</script>

