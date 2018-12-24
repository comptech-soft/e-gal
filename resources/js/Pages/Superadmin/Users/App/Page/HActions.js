module.exports = {
    title: null,
    icon: 'ft-more-horizontal',
    items: {
        'insert': {
            caption: 'Adaugă utilizator',
            icon: 'la la-plus',
            click: (vue) => {
                vue.showForm('insert', null)
            }
        },
    }
}