<template>
    <card-form
        :form="form"
        :record="record"
        @close="$emit('close')"
        @success="onSuccess"
        @error="onError"
    >
        <template slot="form-controls">
            <div class="form-row">
                <div class="col">
                    <cs-textbox
                        id="role-slug"
                        field="slug"
                        placeholder="Codul asociat rolului"
                        :disabled="is_delete"
                        v-model="record.slug"
                        :errors="errors"
                    >
                    </cs-textbox>
                </div>
            </div>

            <div class="form-row">
                <div class="col">
                    <cs-textbox
                        id="role-name"
                        field="name"
                        placeholder="Nume"
                        :disabled="is_delete"
                        v-model="record.name"
                        :errors="errors"
                    >
                    </cs-textbox>
                </div>
            </div>
        </template>
    </card-form>
</template>

<script>

    export default {
        props: {
            form: {required: true},
            timeout: {default: 1000},
        },

        data() {
            return {
                record: {
                    id: null,
                    slug: null,
                    name: null,
                },
                errors: null,
            }
        },

        methods: {
            onSuccess(e) {
                let t = setTimeout( () => {
                    this.$emit('close', {afterClose: v => v.data_manager.populate()});
                }, this.timeout)
            },

            onError(errors) {
                this.errors = errors
            }
        },

        computed: {
            action() {
                return this.form.action
            },

            is_delete() {
                return this.action == 'delete'
            },
        },

        components: {
            'card-form': require('comptechsoft-admin-modern').CardForm,
            'cs-textbox': require('comptechsoft-vue-controls')['cs-textbox'],
        }
    }
</script>
