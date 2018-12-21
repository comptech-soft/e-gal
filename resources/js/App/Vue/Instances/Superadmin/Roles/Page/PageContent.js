/**
 * Class: ..... PageContent
 * ............ Definirea continutului paginii Roles
 */
const ContentManager = require('comptechsoft-core-libs').UI.ContentManager
// const VueComponents = require('comptechsoft-core-libs').VUE.Helpers.Components
const Content = require('./Content')

class PageContent {

    constructor() {
        this.page_manager = new ContentManager()
    }

    /** HEADER.Title */
    setHeaderTitle(title) {
        this.page_manager.content_header.setTitle(title)
    }

    /** HEADER. Breadcrumbs */
    setHeaderBreadcrumbs(breadcrumbs) {
        _.each(breadcrumbs, (item, key) => {
            this.page_manager.content_header.breadcrumbs.AddItem(key, item)
        })        
    }

    /** HEADER. Actions */
    setHeaderActions(actions) {
        this.page_manager.content_header.actions.setTitle(actions.title)
        this.page_manager.content_header.actions.setIcon(actions.icon)
        _.each(actions.items, (item, key) => {
            this.page_manager.content_header.actions.AddItem(key, item)
        }) 
    }

    /** HEADER */
    InitContentHeader(header) {
        this.setHeaderTitle(header.title)
        this.setHeaderBreadcrumbs(header.breadcrumbs)
        this.setHeaderActions(header.actions)
    }

    setBodyFilterSection(component) {
        Vue.component('roles-filter', component)
        this.page_manager.content_body.filter_section.setComponent('roles-filter')
    }

    setBodyDataSection(component) {
        Vue.component('roles-data', component)
        this.page_manager.content_body.data_section.setComponent('roles-data')
    }

    setBodyDataSectionHeader(header) {
        /** Title */
        this.page_manager.content_body.data_section.header.setTitle(header.title)
        /** Toolbar */
        _.each(header.toolbar, (item, key) => {
            this.page_manager.content_body.data_section.header.toolbar.addButton(key, item)
        })
        /** Actions */
        this.page_manager.content_body.data_section.header.actions.setId(header.actions.id)
        this.page_manager.content_body.data_section.header.actions.setColor(header.actions.color)
        this.page_manager.content_body.data_section.header.actions.setIcon(header.actions.icon)
        _.each(header.actions.items, (item, key) => {
            this.page_manager.content_body.data_section.header.actions.addAction(key, item)
        })
    }

    setBodyDataSectionPresentation(presentation) {
        this.page_manager.content_body.data_section.attachPresentation(
            presentation.id, 
            presentation.components, 
            presentation.current
        )
        this.page_manager.content_body.data_section.presentation.makeTable()
        _.each(presentation.table.columns, (column, key) => {
            this.page_manager.content_body.data_section.presentation.table.makeColumn(key)
            this.page_manager.content_body.data_section.presentation.table.columns[key].setWidth(column.width)
            this.page_manager.content_body.data_section.presentation.table.columns[key].header.setCaption(column.header.caption)
            this.page_manager.content_body.data_section.presentation.table.columns[key].control.setSource(column.control.source)
        })
    }


    /** BODY */
    InitContentBody(body) {
        this.setBodyFilterSection(body.filter_section.component)
        this.setBodyDataSection(body.data_section.component)
        this.setBodyDataSectionHeader(body.data_section.header)
        this.setBodyDataSectionPresentation(body.data_section.presentation)
    }

    Init() {
        console.log('#3. [Roles/Page/PageContent.js .... Init()')
        this.InitContentHeader(Content.header)
        this.InitContentBody(Content.body)
    }
}

module.exports = PageContent