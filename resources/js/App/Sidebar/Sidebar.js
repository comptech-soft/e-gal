/**
 * Left sidebar
 * .... se genereaza in functie de user si rolul acestuia
 * .... foloseste clasa Menu din comptechsoft-ui
 */
const Menu = require('comptechsoft-ui').Menu

module.exports = (user, role) => {
    
    if( user === false)
    {
        return require('./Unauthenticated')
    }
    if( role )
    {
        if(role.slug === 'superadmin')
        {
            return require('./Superadmin')
        }
    }
    return null
}