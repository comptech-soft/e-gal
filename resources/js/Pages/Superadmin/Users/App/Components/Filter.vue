<template>
    <div class="card">
        <div class="card-header">
            <h4 class="card-title">
                <i class="la la-filter"></i>
                Filtrare utilizatori
            </h4>
            <a class="heading-elements-toggle"><i class="la la-ellipsis-v font-medium-3"></i></a>
            <div class="heading-elements">
                <ul class="list-inline mb-0">
                    <li><a data-action="close" @click.prevent="$emit('close')"><i class="ft-x"></i></a></li>
                </ul>
            </div>
        </div>
        <div class="card-body">
            <div class="bug-list-search">
                <div class="bug-list-search-content">
                    <form>
                        <vt-remote-select
                            id="role_id"
                            field="role_id"
                            :ajax="ajax"
                            :renderResults="renderResults({id: null, text: '- Toate rolurile -'})"
                            :value="filterables.role_id"
                            v-model="filterables.role_id"
                        >
                        </vt-remote-select>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

        data() {
            return {
                filterables: {
                    role_id: null,
                }
            }
        },

        watch: {
            'filterables': {
                handler: function(newFilterables, oldFilterables) {
                    this.$emit('filter-changed', this.filterables)
                },
                deep: true,
            }
        },

        computed: {
            renderResults() {
                return first_option => {
                    return results => {
                        let options = _.map(results, (record, index) => {
                            let r = {
                                id: record.id,
                                text: record.name
                            }
                            return r
                        })
                        options.splice(0, 0, first_option);
                        return options
                    }
                }
            },

            ajax() {
                return {
                    url: 'superadmin/roles/get-records',
                    data: {
                        orderable: {key: 'name', fields: ['roles.name'], direction: 'asc'},
                        conditions: [],
                    }
                }
            },
        },

        components: {
            'vt-remote-select': require('comptechsoft-admin-modern').components['vt-remote-select'],
        }
    }
</script>