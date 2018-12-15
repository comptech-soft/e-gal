module.exports = {

    props: {
        field: {type: String, required: true},
        errors: {default: null},
        show_error: {type: Boolean, default: true},
    },

    computed: {
        has_error() {
            if( this.errors == null )
            {
                return false;
            }
            return this.errors.has(this.field)
        },

        error_to_string() {
            if( ! this.show_error )
            {
                return '';
            }
            if( (this.errors == null) || (! this.errors.has(this.field) ) )
            {
                return '';
            }
            return this.errors.collect(this.field).toString();
        }
    }
}