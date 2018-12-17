<template>
    <div class="main-menu-content">
        <ul 
            class="navigation navigation-main" 
            id="main-menu-navigation" 
            data-menu="menu-navigation"
        >
            <menu-item
                v-for="(item, index) in options.options"
                :key="'menu-item-' + index"
                :item="item"
                @option-click="onClick"
            >
            </menu-item>
        </ul>
    </div>
</template>

<script>
    export default {
        props: {
            options: {type: Object, required: true}
        },

        components: {
            'menu-item': require('./Item'),
        },

        methods: {
            onClick(option) {
                this.$emit('sidebar-click', option)
            }
        }
    }
</script>
