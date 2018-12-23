module.exports = {
    'id': 'users-actions',
    'color': 'btn-primary',
    'icon': 'ft-settings white',
    'items': {
        'refresh': {
            icon: 'ft-refresh-cw',
            caption: 'Reîncarcă',
            click: null,
        },
        'download': {
            icon: 'ft-download',
            caption: 'Exportă',
            event: 'refresh',
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