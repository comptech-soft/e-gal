const Vee = require('vee-validate')
const ErrorBag = Vee.ErrorBag

class Manager {

    constructor(vue, endpoint, onSuccess = null, onFail = null) {

        /**
         * Initialization
         */
        this.vue = vue
        this.endpoint = endpoint
        this.onSuccess = onSuccess
        this.onFail = onFail

        /**
         * Processing indicator
         */
        this.processing = false

        /**
         * Endpoint result
         */
        this.success = null
        this.result = null
        this.exception = null
        this.errors = null
        this.errors_bag = null
    }

    resetResults() {
        this.success = null
        this.result = null
        this.exception = null
        this.errors = null
        this.errors_bag = null
    }

    toErrorBag() {
        if( this.errors )
        {
            let bag = new ErrorBag();
            for(let field in this.errors)
            {
                for(let i in this.errors[field])
                {
                    bag.add({field: field, msg: this.errors[field][i]});
                }
            }
            return bag;
        }
        return null;
    }

    onSuccessResponse(response, onSuccess) {
        alert(this.result.message)
        onSuccess(response)
    }

    onFailResponse(response, onFail) {
        this.errors_bag = this.toErrorBag()
        onFail(response)
    }

    processingResponse(response, onSuccess, onFail) {
        _.each(response, (item, key) => {
            if( ! this.hasOwnProperty(key) )
            {
                throw 'FormManager::' + key + ' not exist.'
            }
            this[key] = item
        })
        if(response.success) 
        {
            return this.onSuccessResponse(response, onSuccess)
        }
        return this.onFailResponse(response, onFail)
    }

    onSubmit(options) {

        options = _.extend(options, {
            endpoint: this.endpoint,
            record: this.vue.record, 
            onSuccess: this.onSuccess,
            onFail: this.onFail
        })
       
        this.processing = true
        this.resetResults()
        try
        {
            return ComptechApp.Axios.request({
                method: 'post', 
                url: options.endpoint, 
                data: options.record,
            })
            .then( r => {
                this.processingResponse(r.data, options.onSuccess, options.onFail)
                this.processing = false
            })
            .catch( error => {
                this.processing = false
                console.log('ERROR.Form Manager::onSubmit()')
                console.log(error)
            })
        }
        catch(error)
        {
            this.processing = false
            console.log('ERROR.Form Manager::onSubmit()')
            console.log(error)
        }
    }

}

module.exports = Manager