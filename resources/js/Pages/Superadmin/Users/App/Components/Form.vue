<template>
    <div class="card">
        <div class="card-header">
            <h4 class="card-title">
                <i :class="hicon"></i>
                {{ htitle }}
            </h4>
	        <a class="heading-elements-toggle">
                <i class="la la-ellipsis-v font-medium-3"></i>
            </a>
            <div class="heading-elements">
                <ul class="list-inline mb-0">
                    <li>
                        <a data-action="close" @click.prevent="$emit('close')">
                            <i class="ft-x"></i>
                        </a>
                    </li>
                </ul>
	        </div>
	    </div>

        <div class="card-content">
            <div class="card-body">

                <div style="background-color: #000; color: yellow">
                    Action: {{ action}}<br/><br/>
                    Original record: {{ form.record }}<br/><br/>
                    Current record: {{ record }}<br/><br/>
                </div>

                <vt-form 
                    :result="formManager ? formManager.result : null"
                    @close="formManager.result = null"
                >
                    <template slot="form-controls">

                        <div class="row">
                            <div class="col">
                                <vt-textbox 
                                    id="user-email"
                                    field="email"
                                    icon="la la-user"
                                    placeholder="Emailul utilizatorululi"
                                    v-model="record.email"
                                    :errors="errors"
                                >
                                </vt-textbox>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col">
                                <vt-textbox 
                                    id="user-last-name"
                                    field="last_name"
                                    placeholder="Numele utilizatorululi"
                                    v-model="record.last_name"
                                    :errors="errors"
                                >
                                </vt-textbox>
                            </div>
                            <div class="col">
                                <vt-textbox 
                                    id="user-first-name"
                                    field="first_name"
                                    placeholder="Prenumele utilizatorululi"
                                    v-model="record.first_name"
                                    :errors="errors"
                                >
                                </vt-textbox>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col">
                                <vt-password
                                    id="user-password"
                                    field="password"
                                    icon="la la-key"
                                    placeholder="Parola"
                                    v-model="record.password"
                                    :errors="errors"
                                >
                                </vt-password>
                            </div>
                        </div>

                    </template>
                </vt-form>

            </div>
        </div>

        <div class="card-footer border-top-blue-grey border-top-lighten-5 text-muted">
            <div class="form-group mb-0">
                <!-- Buttons Glow -->
                <button 
                    type="button" 
                    :class="'btn ' + bcolor + ' btn-min-width btn-glow mr-1'"
                    @click="onClickCommit"
                >
                    <i :class="bicon"></i>
                    {{ bcaption }}
                </button>
                <button 
                    type="button" 
                    class="btn btn-secondary btn-min-width btn-glow mr-1"
                    @click="$emit('close')"
                >
                    Renunță
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            form: {required: true}
        },

        data() {
            return {
                record: {
                    email: null,
                    password: null,
                    first_name: null,
                    last_name: null,
                },

                /**
                 * Intr-un formular tre sa pun un obiect FormManager
                 * Acestuia i se transmite o referinta catre componenta
                 * Componenta tre sa aiba "record"
                 */
                formManager: null,
            }
        },

        computed: {
            action() {
                return this.form.action
            },

            endpoint() {
                return this.action ? this.form.actions[this.action].endpoint : null
            },

            errors() {
                return this.formManager ? this.formManager.getErrors() : null
            },

            hicon() {
                return this.action ? this.form.actions[this.action].header.icon : null
            },

            htitle() {
                return this.action ? this.form.actions[this.action].header.title : null
            },

            bicon() {
                return this.action ? this.form.actions[this.action].button.icon : null
            },

            bcolor() {
                return this.action ? this.form.actions[this.action].button.color : null
            },

            bcaption() {
                return this.action ? this.form.actions[this.action].button.caption : null
            }
        },

        methods: {
            onClickCommit() {
                this.formManager.onSubmit()
            }
        },

        mounted() {
            this.formManager = new this.app.FormManager(this, this.endpoint, data => {
                console.log('Successs', data)
                if( data.success )
                {
                    let t = setTimeout( () => {
                        this.$emit('close');
                    }, 1000)
                }
            }, data => {
                console.log('Error', data)
            })
        },

        components: {
            'vt-form': require('comptechsoft-admin-modern').components['vt-form'],
            'vt-textbox': require('comptechsoft-admin-modern').components['vt-textbox'],
            'vt-password': require('comptechsoft-admin-modern').components['vt-password'],
        }
    }
</script>
