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
                        id="user-email"
                        field="email"
                        icon="la la-envelope"
                        placeholder="Adresa de email"
                        :disabled="is_delete"
                        v-model="record.email"
                        :errors="errors"
                    >
                    </cs-textbox>
                </div>
            </div>

            <div class="form-row">
                <div class="col">
                    <cs-textbox
                        id="user-last-name"
                        field="last_name"
                        placeholder="Numele"
                        icon="la la-user"
                        :disabled="is_delete"
                        v-model="record.last_name"
                        :errors="errors"
                    >
                    </cs-textbox>
                </div>
                <div class="col">
                    <cs-textbox 
                        id="user-first-name"
                        field="first_name"
                        placeholder="Prenumele"
                        icon="la la-user"
                        :disabled="is_delete"
                        v-model="record.first_name"
                        :errors="errors"
                    >
                    </cs-textbox>
                </div>
            </div>

            <div v-if="is_insert" class="form-row">
                <div class="col">
                    <cs-textbox
                        type="password"
                        id="user-password"
                        field="password"
                        icon="la la-key"
                        placeholder="Parola"
                        :disabled="is_delete"
                        v-model="record.password"
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
                    email: null,
                    password: null,
                    first_name: null,
                    last_name: null,
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

            is_insert() {
                return this.action == 'insert'
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