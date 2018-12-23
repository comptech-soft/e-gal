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
                width: 95,
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
            }
        }
    }
}