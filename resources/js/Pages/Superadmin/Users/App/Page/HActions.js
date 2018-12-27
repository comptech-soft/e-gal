module.exports = {
    title: null,
    icon: 'ft-more-horizontal',
    items: {

        insert: {
            title: 'Adăugare utilizator',
            caption: null,
            color: 'primary',
            icon: 'la la-file',
            is_visible: true,
            is_enabled: true,
            click: v => {
                v.showForm('insert', null)
            },
            visible: v => true,
            enabled: v => {
                if(v.page_manager.content_body.form_section.visible)
                {
                    return false
                }
                return true
            }
        },

        filter: {
            title: 'Filtrare utilizatori',
            caption: null,
            color: 'primary',
            icon: 'la la-filter',
            is_visible: true,
            is_enabled: true,
            click: v => {
                v.showFilter()
            },
            visible: v => true,
            enabled: v => {
                if(v.page_manager.content_body.filter_section.visible || v.page_manager.content_body.form_section.visible)
                {
                    return false
                }
                return true
            }
        },

        
    }
}