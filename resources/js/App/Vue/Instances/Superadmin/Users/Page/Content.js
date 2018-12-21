module.exports = {
    /** Content Header  */
    header: {
        title: 'Utilizatori',
        breadcrumbs: {
            'home': {
                active: false,
                caption: 'Dashboard',
                click: (vue) => {
                    vue.app.Http.redirect(vue.url)
                }
            },
            'users': {
                active: true,
                caption: 'Utilizatori',
                click: null
            }
        },
        actions: {
            title: null,
            icon: 'ft-more-horizontal',
            items: {
                'one': {
                    caption: 'Action #1',
                    icon: 'la la-user',
                    click: () => {
                        alert('Action #1')
                    }
                }
            }
        }
    },
    /** Content Body */
    body: {
        filter_section: {
            component: require('./../Components/Body/Filter/Section')
        },
        data_section: {
            component: require('./../Components/Body/Data/Section'),
            header: {
                title: 'Utilizatorii platformei',
                toolbar: {
                    'insert': {
                        color: 'btn-primary',
                        icon: 'ft-plus white',
                        caption: 'Adaugă',
                        click: () => {
                            alert('Insert....');
                        }
                    },
                    'delete-all': {
                        color: 'btn-danger',
                        icon: 'ft-trash white',
                        caption: 'Șterge tot...',
                        click: () => {
                            alert('Refresh....');
                        }
                    },
                },
                actions: {
                    'id': 'users-actions',
                    'color': 'btn-primary',
                    'icon': 'ft-settings white',
                    'items': {
                        'refresh': {
                            icon: 'ft-refresh',
                            caption: 'Reîncarcă',
                            click: () => {
                                alert('Refresh...')
                            },
                        },
                        'download': {
                            icon: 'ft-download',
                            caption: 'Exportă',
                            click: () => {
                                alert('Export...')
                            },
                        },
                        'upload': {
                            icon: 'ft-upload',
                            caption: 'Importă',
                            click: () => {
                                alert('Imprta...')
                            },
                        },
                    }
                }
            },
            presentation: {
                id: 'users-presentation',
                table: {
                    columns: {
                        'id': {
                            width: 5,
                            header: {
                                caption: 'ID'
                            },
                            control: {
                                source: 'id'
                            }
                        },
                        'email': {
                            width: 95,
                            header: {
                                caption: 'Email'
                            },
                            control: {
                                source: 'email'
                            }
                        }
                    }
                }
            }
        }
    }
}