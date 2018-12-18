<template>
    <div class="breadcrumb-wrapper col-12">
        <ol class="breadcrumb">
            <li 
                class="breadcrumb-item"
                v-for="(item, key, index) in breadcrumbs"
                :key="'breadcrumb-item' + key"
            >
                <a 
                    v-if="! item.active"
                    href="#"
                    @click.prevent="onClick(item)"
                >
                    {{ item.caption }}
                </a>
                <template v-else>
                    {{ item.caption }}
                </template>
            </li>
        </ol>
    </div>
</template>

<script>
    export default {
        props: {
            breadcrumbs: {type: Object}
        },

        methods: {
            onClick(item) {
                if( item.click == null)
                {
                    return false
                }
                try
                {
                    this.$emit('breadcrump-click', item)
                    if(_.isFunction(item.click) ) {
                        item.click(this)
                    }
                }
                catch(error)
                {
                    console.log(error)
                }
            }
        }
    }
</script>
