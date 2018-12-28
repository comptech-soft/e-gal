module.exports = {
    title: null,
    icon: 'ft-more-horizontal',
    items: {
        insert: {
            title: 'Adaugă un rol nou',
            caption: null,
            color: 'primary',
            icon: 'la la-file',
            is_visible: true,
            is_enabled: true,
            click: v => v.showForm('insert', null),
            visible: v => true,
            enabled: v => ! v.page_manager.content_body.form_section.visible
        },
    }
}