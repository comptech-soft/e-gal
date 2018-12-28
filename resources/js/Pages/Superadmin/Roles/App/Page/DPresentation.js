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
                width: 25,
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
                width: 35,
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
            },
            'updated_at': {
                width: 10,
                header: {
                    caption: 'Modificat la',
                    orderable: {
                        fields: ['roles.updated_at'],
                        direction: 'asc',
                    }
                },
                control: {
                    source: 'updated_at'
                }
            },
            'actions': {
                width: 5,
                header: {
                    caption: 'Acțiuni',
                },
                control: {
                    component: 'actions',
                    type: null,
                    actions: {
                        update: {
                            icon: 'ft-edit-2',
                            caption: record  => {
                                return 'Editează #' + record.id 
                            },
                            click: (vue, record) => {
                                vue.showForm('update', record)
                            }
                        },
                        delete: {
                            icon: 'ft-trash-2 danger',
                            caption: record => {
                                return 'Șterge #' + record.id 
                            },
                            click: (vue, record) => {
                                vue.showForm('delete', record)
                            }
                        }
                    }
                }
            }
        }
    }
}