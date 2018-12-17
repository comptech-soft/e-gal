class Dom {

    constructor(app) {
        this.app = app
    }

    InsertScript(src) {
        let new_script = document.createElement("script")
        new_script.type = "text/javascript";
		new_script.src = src;
        document.body.appendChild(new_script);
        new_script.onload = () => {
            console.log(src + '  ==> loaded')
        }
        // console.log(new_script, 'appended...');
    }

}

module.exports = Dom