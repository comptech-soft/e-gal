module.exports = {
    id: 'users-presentation',
    table: {
        default_order: {
            key: 'email',
            fields: ['users.email'],
            direction: 'asc'
        },
        columns: {
            'id': {
                width: 5,
                header: {
                    caption: 'ID',
                    orderable: {
                        fields: ['users.id'],
                        direction: 'asc',
                    }
                },
                control: {
                    source: 'id'
                }
            },
            'email': {
                width: 35,
                header: {
                    caption: 'Email',
                    orderable: {
                        fields: ['users.email'],
                        direction: 'asc',
                    }
                },
                control: {
                    source: 'email'
                }
            },
            'full_name': {
                width: 40,
                header: {
                    caption: 'Nume',
                    orderable: {
                        fields: ['users.last_name', 'users.first_name'],
                        direction: 'asc',
                    }
                },
                control: {
                    source: 'full_name'
                }
            },
            'actions': {
                width: 10,
                header: {
                    caption: 'Acțiuni',
                },
                control: {
                    component: 'actions',
                    type: null,
                    source: 'aaaaaaaa'
                }
            }
        }
    }
}