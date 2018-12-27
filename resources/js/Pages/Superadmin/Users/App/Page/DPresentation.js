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
                    style: {
                        'text-align': 'right'
                    },
                    source: 'id'
                }
            },
            'role': {
                width: 15,
                header: {
                    caption: 'Role',
                    orderable: {
                        fields: ['roles.name'],
                        direction: 'asc',
                    }
                },
                control: {
                    source: record => {
                        if(! record.roles || ! record.roles.length)
                        {
                            return null
                        }
                        return record.roles[0].name
                    }
                }
            },
            'email': {
                width: 30,
                header: {
                    caption: 'Email',
                    orderable: {
                        fields: ['users.email', 'users.last_name', 'users.first_name'],
                        direction: 'asc',
                    }
                },
                control: {
                    source: 'email'
                }
            },
            'full_name': {
                width: 25,
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
            'last_login': {
                width: 10,
                header: {
                    caption: 'Ultima logare',
                    orderable: {
                        fields: ['users.last_login', 'users.last_name', 'users.first_name'],
                        direction: 'asc',
                    }
                },
                control: {
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

                        // return moment().fromNow()
                    }
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