Ext.define('ToDo.model.TaskList', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
        	{name: 'listName', type: 'string'}
        	],
        	 associations: [
            {type: 'hasMany', model: 'TaskItem',    name: 'items'},
        
        ]
    }
});
