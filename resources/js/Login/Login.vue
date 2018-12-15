<template>
    <section class="flexbox-container">
        <div class="col-12 d-flex align-items-center justify-content-center">
            <div class="col-md-4 col-10 box-shadow-2 p-0">

                <vt-card>
                    <template slot="card-header">
                        <div class="card-title text-center">
                            <div class="p-1">
                                <vt-img
                                    :src="url + '/app-assets/images/logo/logo-dark.png'"
                                    alt="Branding Logo"
                                >
                                </vt-img>
                            </div>
                        </div>
                        <h6 class="card-subtitle line-on-side text-muted text-center font-small-3 pt-2">
                            <span>Login with Modern</span>
                        </h6>
                    </template>

                    <vt-form 
                        slot="card-body"
                        :result="formManager ? formManager.result : null"
                        @close="formManager.result = null"
                    >
                        <template slot="form-controls">

                            <vt-textbox 
                                id="user-name"
                                field="email"
                                placeholder="Your user name"
                                v-model="record.email"
                                :show_error="false"
                                :errors="formManager ? formManager.getErrors() : null"
                            />

                            <vt-password
                                id="user-password"
                                field="password"
                                placeholder="Your password"
                                v-model="record.password"
                                :show_error="false"
                                :errors="formManager ? formManager.getErrors() : null"
                            >
                            </vt-password>

                            <div class="form-group row">
                                <div class="col-md-6 col-12 text-center text-md-left">
                                    <vt-checkbox
                                        id="remember-me"
                                        label="Tine-mă minte!"
                                        v-model="record.remember_me"
                                    >
                                    </vt-checkbox>
                                </div>

                                <div class="col-md-6 col-12 text-center text-md-right">
                                    <vt-link
                                        caption="Ai uitat parola?"
                                        @click="onClickForgetPassword"
                                    >
                                    </vt-link>
                                </div>
                            </div>
                        </template>

                        <template slot="form-actions">
                            
                            
                            <vt-button 
                                caption="Login"
                                icon="ft-unlock"
                                @click="onClickLogin"
                            >
                            </vt-button>
                        </template>
                    </vt-form>

                    <div class="" slot="card-footer">
                        <p class="float-sm-left text-center m-0">
                            <vt-link
                                caption="Recupereaza parola"
                                @click="onClickRecoverPassword"
                            >
                            </vt-link>
                        </p>
                        
                        <p class="float-sm-right text-center m-0">
                            Ești nou pe aici? 
                            <vt-link
                                caption="Crează-ți un cont"
                                @click="onClickCreateAccount"
                            >
                            </vt-link>
                        </p>
                    </div>
                </vt-card>
            </div>
        </div>
    </section>
</template>

<script>
    export default {

        data() {
            return {
                record: {
                    email: null,
                    password: null,
                    remember_me: false,
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
            url() {
                return document.head.querySelector('meta[name="base-url"]').content
            }
        },

        methods: {
            onClickLogin(e) {
                this.formManager.onSubmit()
            },

            onClickForgetPassword(e) {
                alert('Forget your password?');
            },

            onClickRecoverPassword(e) {
                alert('Recover password?');
            },

            onClickCreateAccount(e) {
                alert('Create account?');
            },
        },

        mounted() {
            this.formManager = new ComptechApp.FormManager(this, 'login', data => {
                console.log(data)
            }, data => {
                console.log(data)
            })
        },

        components: {
            'vt-card': require('./Card'),
            'vt-form': require('./Form'),

            'vt-img': require('./Image'),
            'vt-textbox': require('./Textbox'),
            'vt-password': require('./Password'),
            'vt-checkbox': require('./Checkbox'),
            'vt-link': require('./Link'),
            'vt-button': require('./Button'),
        }
    }
</script>


