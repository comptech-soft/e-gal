const FormAction = require('comptechsoft-ui').FormAction

module.exports = {

    insertAction: (endpoint) => {
        return () => {
            let action = new FormAction('insert')
            action
                .Endpoint(endpoint)
                .HeaderCaption('Adăugare')
                .HeaderTitle('Adăugare')
                .HeaderIcon('la la-plus')
                .ButtonCaption('Salvează')
                .ButtonTitle('Salvează')
                .ButtonIcon('la la-save')
                .ButtonColor('btn-primary')
            return action
        }
    },

    updateAction: (endpoint) => {
        return () => {
            let action = new FormAction('update')
            action
                .Endpoint(endpoint)
                .HeaderCaption('Modificare')
                .HeaderTitle('Modificare')
                .HeaderIcon('la la-pencil')
                .ButtonCaption('Salvează')
                .ButtonTitle('Salvează')
                .ButtonIcon('la la-save')
                .ButtonColor('btn-primary')
            return action
        }
    },

    deleteAction: (endpoint) => {
        return () => {
            let action = new FormAction('delete')
            action
                .Endpoint(endpoint)
                .HeaderCaption('Ștergere')
                .HeaderTitle('Ștergere')
                .HeaderIcon('la la-trash')
                .ButtonCaption('Șterge')
                .ButtonTitle('Șterge')
                .ButtonIcon('la la-trash')
                .ButtonColor('btn-danger')
            return action
        }
    }
}