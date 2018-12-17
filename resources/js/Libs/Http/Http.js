class Http {

    constructor(app) {
        this.app = app
    }
    
    redirect(timeout = 1000, url = null) {
        if( ! url ) 
        {
            url = document.head.querySelector('meta[name="base-url"]').content
        }
        let t = setTimeout( () => {
            location.href = url
        }, timeout)
    }

}

module.exports = Http