<template>
    <div 
        :class="'alert bg-' + bk_color + ' alert-icon-left alert-dismissible mb-2'" role="alert">
        <span v-if="icon" class="alert-icon">
            <i :class="icon"></i>
        </span>
        <button 
            v-if="closable" 
            type="button" 
            class="close" 
            @click="$emit('close')"
        >
            <span aria-hidden="true">
                <i class="la la-times"></i>
            </span>
        </button>

        <strong v-if="short_caption">
            {{ short_caption}}
        </strong> 
        <span v-html="message">
        </span>
    </div>
</template>

<script>
    export default {
        props: {
            short_caption: {type: String, default: ''},
            message: {type: String, default: 'Here is an alert'},
            bk_color: {type: String, default: 'danger'},
            closable: {type: Boolean, default: true},
            icon: {type: String, default: ''}
        }        
    }
</script>
