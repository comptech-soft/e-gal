module.exports = {

    props: {
        id: {type: String, required: true},
        
        label: {type: String, default: ''},
        placeholder: {type: String, default: 'My placeholder'},
        
        value: {},
        disabled: {type: Boolean, default: false},
    }

}