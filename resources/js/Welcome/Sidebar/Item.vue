<template>
    <li class="nav-item">
		<a
			href="#"
			@click.prevent="onClick(item)"
		>
			<i :class="item.icon">
			</i>
			<span class="menu-title">
				{{ item.caption}}
			</span>
		</a>
		<ul class="menu-content">
			<menu-item
				v-for="(subitem, key) in item.options"
				:key="'menu-item-' + key"
				:item="subitem"
				@option-click="onClick(subitem)"
			>
			</menu-item>
		</ul>
      </li>
</template>

<script>
	export default {
		props: {
			item: {type: Object, required: true}
		},

		computed: {
			has_options() {
				if( _.is_array(this.item.options) )
				{
					return this.item.options.length > 0
				}
				return _.keys(this.item.options).length > 0
			}
		},

		methods: {
			onClick(item) {
				if(item.event)
				{
					this.$emit('option-click', item)
				}
			}
		},

		name: 'menu-item',
	}
</script>


