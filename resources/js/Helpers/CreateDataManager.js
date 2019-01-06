const

    Grid = require('comptechsoft-ui').Grid,
    Column = require('comptechsoft-ui').Column


let CreateGrid = (options) => {

    let grid = new Grid('grid')
    
    grid.DefaultOrder(options.default_order)
    
    _.each(options.columns, (column, key) => {
        grid.AddColumn(key, column)
    })
    
    return grid
}
    
let CreateDataManager = (options) => {

    let manager = {
        endpoint: options.endpoint,
        per_page: options.per_page,
        searchable: options.searchable,
        conditions: options.conditions,
        grid: CreateGrid(options)
    }

    return manager
}

module.exports = CreateDataManager