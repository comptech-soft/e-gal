module.exports = {
    title: null,
    icon: 'ft-more-horizontal',
    items: {
        filter: {
            caption: 'Filtrează',
            icon: 'la la-filter',
            click: (vue) => {
                vue.showFilter()
            }
        },

        insert: {
            caption: 'Adaugă utilizator',
            icon: 'la la-plus',
            click: (vue) => {
                vue.showForm('insert', null)
            }
        },
    }
}