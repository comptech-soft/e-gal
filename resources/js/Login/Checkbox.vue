<template>
    <fieldset>
        <input 
            type="checkbox" 
            :id="id" 
            :checked="value"
            class="chk-remember"
            @click="$emit('input', $event.target.checked)"
        />
        <label 
            :for="id"
        > 
            {{ label }}
        </label>
    </fieldset>
</template>

<script>
    export default {
        props: {
            id: {type:String, required: true},
            label: {type:String, default: ''},
            value: {},
        }
    }
</script>