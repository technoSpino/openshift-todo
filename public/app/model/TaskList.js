Ext.define('ToDo.model.TaskList', {
    extend: 'Ext.data.Model',
    config: {
        hasMany: 'TaskItem',
        identifier: 'uuid',
        fields: [
        {
            name: 'listName',
            type: 'string'
        }
        ],
        proxy: {
            type: 'localstorage',
            id: 'idForLocalStorage',
        }
    }
});