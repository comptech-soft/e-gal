module.exports = {
    id: 'users-presentation',
    table: {
        default_order: {
            key: 'slug',
            fields: ['roles.slug'],
            direction: 'asc'
        },
        columns: {
            'id': {
                width: 5,
                header: {
                    caption: 'ID',
                    orderable: {
                        fields: ['roles.id'],
                        direction: 'asc',
                    }
                },
                control: {
                    source: 'id'
                }
            },
            'slug': {
                width: 35,
                header: {
                    caption: 'Slug',
                    orderable: {
                        fields: ['roles.slug'],
                        direction: 'asc',
                    }
                },
                control: {
                    source: 'slug'
                }
            },
            'name': {
                width: 40,
                header: {
                    caption: 'Nume',
                    orderable: {
                        fields: ['roles.name'],
                        direction: 'asc',
                    }
                },
                control: {
                    source: 'name'
                }
            },
            'created_at': {
                width: 10,
                header: {
                    caption: 'Creat la',
                    orderable: {
                        fields: ['roles.created_at'],
                        direction: 'asc',
                    }
                },
                control: {
                    source: 'created_at'
                }
            }
        }
    }
}