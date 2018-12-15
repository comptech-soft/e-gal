<template>
    <img 
        :src="src" 
        :alt="alt"
    />
</template>

<script>
    export default {

        props: {
            src: {type: String, default: '', required: true},
            alt: {type: String, degault: '', required: true},
        }
        // ../../../
        //
    }
</script>