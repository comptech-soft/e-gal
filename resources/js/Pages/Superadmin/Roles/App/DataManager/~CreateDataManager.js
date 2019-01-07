const GridManager = require('comptechsoft-ui').Grid.Manager

module.exports = GridManager({
    endpoint: 'superadmin/roles/get-records',
    per_page: 20,
    searchable: {
        placeholder: 'Caută rapid...',
        fields: ['roles.slug', 'roles.name'],
        value: null,
    },
    conditions: null,
    default_order: {
        key: 'slug',
        fields: ['roles.slug'],
        direction: 'asc'
    },
    columns: require('./Columns')
})