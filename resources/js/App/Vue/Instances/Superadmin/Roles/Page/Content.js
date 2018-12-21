module.exports = {
    /** Content Header  */
    header: {
        title: 'Roluri',
        breadcrumbs: {
            'home': {
                active: false,
                caption: 'Dashboard',
                click: (vue) => {
                    vue.app.Http.redirect(vue.url)
                }
            },
            'roles': {
                active: true,
                caption: 'Roluri',
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
                title: 'Rolurile utilizatorilor platformei',
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
                    'id': 'roles-actions',
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
                id: 'roles-presentation',
                components: ['table', 'list'],
                current: 'table',
                table: {
                    columns: {
                        'id': {
                            width: 50,
                            header: {
                                caption: 'ID'
                            },
                            control: {
                                source: 'id'
                            }
                        },
                        'slug': {
                            width: 50,
                            header: {
                                caption: 'Slug'
                            },
                            control: {
                                source: 'slug'
                            }
                        }
                    }
                }
            }
        }
    }
}