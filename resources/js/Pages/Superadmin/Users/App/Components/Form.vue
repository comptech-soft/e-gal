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
               
                {{ form }}

            </div>
        </div>

        <div class="card-footer border-top-blue-grey border-top-lighten-5 text-muted">
            <div class="form-group mb-0">
                <!-- Buttons Glow -->
                <button 
                    type="button" 
                    :class="'btn ' + bcolor + ' btn-min-width btn-glow mr-1'"
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

        computed: {
            action() {
                return this.form.action
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
        }
    }
</script>
