<template>
    <form  class="form-horizontal form-simple" novalidate>
        
        <vt-alert
            v-if="result"
            :bk_color="result.type"
            :message="result.message"
            :icon="result.success ? 'la la-thumbs-o-up' : 'la la-thumbs-o-down'"
            @close="$emit('close')"
        >
        </vt-alert>

        <slot name="form-controls">
        </slot>

        <slot name="form-actions">
        </slot>
    </form>
</template>

<script>
    export default {
        
        props: {
            result: {default: null}
        },

        components: {
            'vt-alert': require('./Alert')
        }
    }
</script>
