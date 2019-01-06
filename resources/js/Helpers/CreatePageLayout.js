const 
    Page = require('comptechsoft-ui').Page,
    Menu = require('comptechsoft-ui').Menu,
    FormActions = require('./FormActions')

const CreatePageLayout = (layout) => {

    let page = new Page()
    
    /** Header title */
    page.header.setTitle(layout.header.title)

    /** Header actions */
    _.each(layout.header.actions, (action, key) => {
        page.header.actions.AddOption(key, action)
    })

    /** Header breadcrumbs */
    _.each(layout.header.breadcrumbs, (action, key) => {
        page.header.breadcrumbs.AddOption(key, action)
    })

    /** Body data */
    page.body.data
        .Tag('simple-page-data')
        .VisibleCallback(v => ! v.form_is_visible)
        .Visible(true)
        .With('title', layout.data.title)
        .With('toolbar', () => {
            let option = new Menu('toolbar')
            _.each(layout.data.toolbar, (action, key) => {
                option.AddOption(key, action)
            })
            return option
        })
        .With('actions', () => {
            let option = new Menu('actions')
            option
                .Icon('ft-settings white')
                .SetClass({
                    'btn': true,
                    'btn-primary': true,
                    'dropdown-toggle': true,
                    'dropdown-menu-right': true,
                    'btn-sm': true,
                })
            _.each(layout.data.actions, (action, key) => {
                option.AddOption(key, action)
            })   
            return option
        })

    /** Body form */
    page.body.form
        .Tag('simple-page-form')
        .With('actions', () => {
            return {
                insert: FormActions.insertAction(layout.form.insert.endpoint)(), 
                update: FormActions.updateAction(layout.form.update.endpoint)(), 
                delete: FormActions.deleteAction(layout.form.delete.endpoint)()
            }
        })
    
    page.body.form.Show = (action, record) => {
        page.body.form.action = action
        page.body.form.record = record
        page.body.form.visible = true
    }
    
    page.body.form.Hide = () => {
        page.body.form.action = null
        page.body.form.record = null
        page.body.form.visible = false
    }
    
    return page
}

module.exports = CreatePageLayout