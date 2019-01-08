const 
    Column = require('comptechsoft-ui').Grid.CreateColumn,
    CreateMenu = require('comptechsoft-ui').Menus.Create,
    Options = require('comptechsoft-ui').Menus.DefaultOptions

module.exports = {
    id: () => Column('id', {
        width: 5, 
        caption: 'ID', 
        orderby: ['geo-locations.id'], 
        direction: 'asc', 
        source: 'id'
    }),

    name: () => Column('name', {
        width: 80, 
        caption: 'Name', 
        orderby: ['geo-locations.type', 'geo-locations.name'], 
        direction: 'asc', 
        source: 'name'
    }),

    type: () => Column('type', {
        width: 10, 
        caption: 'Tip', 
        orderby: ['geo-locations.type'], 
        direction: 'asc', 
        source: 'type'
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