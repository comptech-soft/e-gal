<template>
    <fieldset class="form-group position-relative has-icon-left">
        <input 
            type="password"
            :id="id"
            class="form-control form-control-lg input-lg" 
            :placeholder="placeholder" 
            required
            
            :value="value"
            @input="$emit('input', $event.target.value)"
        />
        <div class="form-control-position">
            <i class="la la-key"></i>
        </div>
    </fieldset>
</template>

<script>
    export default {
        props: {
            id: {type:String, required: true},
            placeholder: {type:String, required: true},
            value: {},
        }

        // user-password
        // Enter Password
    }
</script>