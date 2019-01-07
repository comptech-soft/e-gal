const 
    Column = require('comptechsoft-ui').Grid.CreateColumn,
    CreateMenu = require('comptechsoft-ui').Menus.Create,
    Options = require('comptechsoft-ui').Menus.DefaultOptions

module.exports = {
    id: () => Column('id', {
        width: 5, 
        caption: 'ID', 
        orderby: ['roles.id'], 
        direction: 'asc', 
        source: 'id'
    }),

    slug: () => Column('slug', {
        width: 20, 
        caption: 'Slug', 
        orderby: ['roles.slug'], 
        direction: 'asc', 
        source: 'slug'
    }),

    name: () => Column('name', {
        width: 30, 
        caption: 'Nume', 
        orderby: ['roles.name'], 
        direction: 'asc', 
        source: 'name'
    }),

    users_count: () => Column('users_count', {
        width: 10, 
        caption: 'Utilizatori', 
        orderby: ['users_count'], 
        direction: 'asc', 
        source: 'users_count',
        style: {
            'text-align': 'right'
        }
    }),

    created_at: () => Column('created_at', {
        width: 10, 
        caption: 'Creat la...', 
        orderby: ['roles.created_at'], 
        direction: 'asc', 
        source: 'created_at'
    }),

    updated_at: () => Column('updated_at', {
        width: 10, 
        caption: 'Modificat la...', 
        orderby: ['roles.updated_at'], 
        direction: 'asc', 
        source: 'updated_at'
    }),

    actions: () => {
        let column = Column('actions', {
            width: 5,
            caption: 'Acțiuni',
            component: 'actions',
            type: null,
            actions: () => 
                CreateMenu('actions', {})
                .AddOption('update', Options.update)
                .AddOption('delete', Options.delete)
        })
        return column
    }
}