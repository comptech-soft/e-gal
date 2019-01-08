const GridManager = require('comptechsoft-ui').Grid.Manager

module.exports = GridManager({
    endpoint: 'superadmin/locations/get-records',
    per_page: 20,
    searchable: {
        placeholder: 'Caută rapid...',
        fields: [],
        value: null,
    },
    conditions: null,
    default_order: {
        key: 'id',
        fields: ['geo-locations.id'],
        direction: 'asc'
    },
    columns: require('./Columns')
})