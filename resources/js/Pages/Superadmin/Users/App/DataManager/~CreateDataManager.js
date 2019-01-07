const GridManager = require('comptechsoft-ui').Grid.Manager

module.exports = GridManager({
    endpoint: 'superadmin/users/get-records',
    per_page: 20,
    searchable: {
        placeholder: 'Caută rapid...',
        fields: ['users.email', 'users.first_name', 'users.last_name'],
        value: null,
    },
    conditions: null,
    default_order: {
        key: 'email',
        fields: ['users.email'],
        direction: 'asc'
    },
    columns: require('./Columns')
})