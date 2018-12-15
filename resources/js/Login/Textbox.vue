<template>
    <fieldset :class="'form-group position-relative has-icon-left mb-0' + (has_error ? ' has-danger' : '')">
        <input 
            type="text"
            :id="id"
            class="form-control form-control-lg input-lg" 
            :placeholder="placeholder" 
            required
            
            :value="value"
            @input="$emit('input', $event.target.value)"
        />
        <div class="form-control-position">
            <i class="ft-user"></i>
        </div>

        {{ error_to_string }}
    </fieldset>
</template>

<script>
    export default {
        props: {
            id: {type:String, required: true},
            placeholder: {type:String, required: true},
            value: {},
        },

        mixins: [
            require('./~mixins/errors')
        ]
    }
</script>

<style lang="scss" scoped>
    fieldset.has-danger {
        input {
            border-color: #ff4961 !important;
        }

    }
</style>
