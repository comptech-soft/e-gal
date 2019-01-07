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

    role: () => Column('role', {
        width: 15,
        caption: 'Role',
        orderby: ['roles.name'],
        direction: 'asc', 
        source: record => {
            if(! record.roles || ! record.roles.length)
            {
                return null
            }
            return record.roles[0].name
        }
    }),

    email: () => Column('email', {
        width: 30, 
        caption: 'Email', 
        orderby: ['users.email', 'users.last_name', 'users.first_name'], 
        direction: 'asc', 
        source: 'email'
    }),

    full_name: () => Column('full_name', {
        width: 25, 
        caption: 'Nume', 
        orderby: ['users.last_name', 'users.first_name'], 
        direction: 'asc', 
        source: 'full_name'
    }),

    last_login: () => Column('last_login', {
        width: 10, 
        caption: 'Ultimul login', 
        orderby: ['users.last_login', 'users.last_name', 'users.first_name'], 
        direction: 'asc', 
        source: record => {
            if( ! record.last_login )
            {
                return null
            }
            let 
                now = moment(new Date()), 
                end = moment(record.last_login),
                duration = moment.duration(now.diff(end)),
                days = duration.asDays()
            return days >= 1.00 ? end.format('dddd, MMMM Do YYYY') : end.fromNow();
        }
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
