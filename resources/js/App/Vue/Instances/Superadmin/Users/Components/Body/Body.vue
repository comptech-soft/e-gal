<template>
    <div class="content-detached content-right">
        <div class="content-body" style="margin-left:0px">
            <!-- 
                Sectiunea de filtrare
                Am filtrare daca filter != null 
            -->
            <section v-if="filter_section!=null" class="row">
                <div class="col-12">
                    <component 
                        :is="filter_section.component"
                        :records="records"
                    >
                    </component>
                </div>
            </section>

            <!-- 
                Sectiunea de date
            -->
            <section class="row">
                <div class="col-12">
                    <component 
                        :is="data_section.component"
                        :header="data_section.header"
                        :presentation="data_section.presentation"
                        :records="records"
                        :data_manager="data_manager"
                        @per_page_selected="onPerPageSelected"
                        @quick-search="onQuickSearch"
                        @content-body-actions-click="onClickDataHeaderAction"
                        @change-page="onChangePage"
                        @order_by="onOrderBy"
                    >
                    </component>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            filter_section: {required: true},
            data_section: {required: true},
            records: {type: Array, default: () => []},
            data_manager: {type: Object, required: true},
        },

        methods: {
            onPerPageSelected(per_page) {
                this.$emit('per_page_selected', per_page)
            },

            onQuickSearch(searched) {
                this.$emit('quick-search', searched)
            },

            onClickDataHeaderAction(event) {
                this.$emit('content-body-actions-click', event)
            },

            onChangePage(page) {
                this.$emit('change-page', page)
            },

            onOrderBy(order) {
                this.$emit('order_by', order)
            }
        },
    }
</script>
