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
                width: 95,
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
            }
        }
    }
}