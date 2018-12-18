<template>
    <div class="btn-group float-md-right" role="group" aria-label="Button group with nested dropdown">
        <button 
            class="btn btn-info round dropdown-toggle dropdown-menu-right box-shadow-2 px-2" 
            id="btnGroupDrop1" 
            type="button" 
            data-toggle="dropdown" 
            aria-haspopup="true" 
            aria-expanded="false"
        >
            <i :class="actions.icon + ' icon-left'"></i> 
            {{ actions.title }}
        </button>
        <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
            <a 
                class="dropdown-item" 
                href="#"
                v-for="(item, key, index) in actions.list"
                :key="'action-item-' + key"
                @click="onClick(item)"
            >
                <i v-if="item.icon" :class="item.icon"></i>
                {{ item.caption }}
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            actions: {type: Object}
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
