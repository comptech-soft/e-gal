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
      </li>
</template>

<script>
	export default {
		props: {
			item: {type: Object, required: true}
		},

		methods: {
			onClick(item) {
				this.$emit('option-click', item)
			}
		}
	}
</script>
