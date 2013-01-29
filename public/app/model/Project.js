Ext.define('ToDo.model.Project', {
    extend: 'Ext.data.Model',
    requires:['ToDo.model.Task'],
    config: {
        hasMany: {associatedModel:'ToDo.model.Task',name:'tasks'},
        identifier: 'uuid',
        fields: [{
            name: 'title',
            type: 'string'
        }],
        proxy: {
            type: 'localstorage',
            id: 'idForLocalStorage'
        }
    }
});